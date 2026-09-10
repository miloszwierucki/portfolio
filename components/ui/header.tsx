import { tinaField } from "tinacms/dist/react";

export const Header = ({ content }: { content: { title: string } }) => {
  return (
    <h1
      className="font-jakarta after:bg-surface-muted after:rounded-highlight relative mb-7 w-fit text-2xl font-semibold after:absolute after:-bottom-3 after:left-0 after:h-2 after:w-3/4 after:content-[''] xl:text-3xl xl:text-[1.75rem]"
      data-tina-field={tinaField(content, "title")}
    >
      {content.title}
    </h1>
  );
};
