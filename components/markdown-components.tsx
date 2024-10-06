import { Components } from "tinacms/dist/rich-text";
import { Link } from "@/i18n/routing";

export const MarkdownComponents = (
  pointerEnter: () => void,
  pointerLeave: () => void
) => {
  const components: Components<{
    a: { url: string; children: React.ReactNode };
  }> = {
    a: (props) => (
      <Link
        onMouseEnter={pointerEnter}
        onMouseLeave={pointerLeave}
        href={props!.url}
        className="hover:underline hover:underline-offset-4"
      >
        {props!.children}
      </Link>
    ),
  };

  return components;
};
