import { template } from "../../src/template/templateEmail";

export async function onRequestPost(context) {
  try {
    return await handleRequest(context);
  } catch (e) {
    console.error(e);
    return new Response("Error sending message", { status: 500 });
  }
}

async function handleRequest({ request, env }) {
  const ip = request.headers.get("CF-Connecting-IP");

  const data = await request.json();
  const tokenValidated = await validateToken(ip, data.token, env);

  if (!tokenValidated) {
    return new Response("Token validation failed", { status: 403 });
  }

  const emailSent = await forwardMessage(data.values, env);

  if (!emailSent) {
    return new Response("Error sending message", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}

async function validateToken(ip, token, env) {
  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();

  return outcome.success;
}

async function forwardMessage(values, env) {
  const message = template(
    values.name,
    values.subject,
    values.email,
    values.message
  );

  const emailResp = await fetch(
    new Request("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                name: "Milosz",
                email: env.CLOUDFLARE_RECIPIENT_EMAIL,
              },
            ],
          },
        ],
        from: {
          name: values.name,
          email: env.CLOUDFLARE_SENDER_EMAIL,
        },
        subject: values.subject,
        content: [
          {
            type: "text/html",
            value: message,
          },
        ],
      }),
    })
  );

  console.log(
    `[LOGGING FROM /forwardMessage - send]: ${emailResp.status} ${emailResp.ok} ${emailResp.statusText}`
  );

  return emailResp.ok;
}
