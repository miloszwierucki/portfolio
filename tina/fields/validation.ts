const WEB_PROTOCOLS = new Set(["http:", "https:"]);
const ACTION_PROTOCOLS = new Set([...WEB_PROTOCOLS, "mailto:", "tel:"]);

function validateUrl(value: string | undefined, protocols: Set<string>) {
  if (!value) return;

  try {
    const url = new URL(value);

    if (!protocols.has(url.protocol)) {
      return "Use a supported URL protocol";
    }
  } catch {
    return "Enter a valid URL";
  }

  return;
}

export function validateWebUrl(value: string | undefined) {
  return validateUrl(value, WEB_PROTOCOLS);
}

export function validateActionUrl(value: string | undefined) {
  return validateUrl(value, ACTION_PROTOCOLS);
}
