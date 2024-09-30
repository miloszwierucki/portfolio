import { tinaField } from "tinacms/dist/react";

export const Header = ({ content }: { content: { title: string } }) => {
  return (
    <h1
      className="relative mb-7 w-fit font-jakarta text-2xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:rounded-sm after:bg-cod-gray-200/10 after:content-[''] xl:text-3xl dark:after:dark:bg-cod-gray-200/5"
      data-tina-field={tinaField(content, "title")}
    >
      {content.title}
    </h1>
  );
};
