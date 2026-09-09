import { Components } from "tinacms/dist/rich-text";
import { ReactNode } from "react";

import { Link } from "@/i18n/navigation";

export const MarkdownComponents = () => {
  const components: Components<{
    a: { url: string; children: ReactNode };
  }> = {
    a: (props) => (
      <Link
        data-cursor="pointer"
        href={props!.url}
        className="hover:underline hover:underline-offset-4"
      >
        {props!.children}
      </Link>
    ),
  };

  return components;
};
