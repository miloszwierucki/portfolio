"use client";

import useLocalStorageRemoved from "@/hooks/useLocalStorageRemoved";
import { signOut, useSession } from "next-auth/react";
import CMS from "@sveltia/cms";

declare global {
  interface Window {
    CMS: typeof CMS;
  }
}

export default function CMSComponent() {
  window.CMS = CMS;

  const { data: session } = useSession();

  console.log(session);

  useLocalStorageRemoved("sveltia-cms.user", () => {
    if (session) {
      signOut();
    }
  });
}
