"use server";

import { cookies } from "next/headers";

export default async function setLang(lang: string) {
  cookies().set("i18nlang", lang);
}
