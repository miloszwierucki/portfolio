"use client";

import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
  return (
    <Analytics
      mode={"production"}
      beforeSend={(event) => {
        if (event.url.includes("/admin")) {
          return null;
        }
        return event;
      }}
    />
  );
}
