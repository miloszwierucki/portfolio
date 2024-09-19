import { NextResponse } from "next/server";

// import { NextApiResponse, NextApiRequest } from "next/server";
import { auth } from "@/auth";

export const GET = auth(async function GET(req) {
  if (!req.auth) return NextResponse.redirect(new URL("/login", req.url));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const token = req.auth.sessionToken;
  const provider = "github"; // or determine dynamically

  const responseBody = renderBody("success", {
    token,
    provider,
  });

  return new NextResponse(responseBody, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
});

function renderBody(
  status: string,
  content: { token: string | undefined; provider: string }
) {
  return `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:${status}:${JSON.stringify(content)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;
}
