import { Collection } from "tinacms";

const portfolio: Collection = {
  name: "portfolio",
  label: "Portfolio",
  path: "content/portfolio",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => {
      return "/portfolio";
    },
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      label: "Portfolio content",
      name: "description",
      isBody: true,
      type: "rich-text",
      overrides: {
        toolbar: ["link", "bold", "italic", "code", "raw"],
      },
    },
    {
      type: "object",
      list: true,
      name: "projects",
      label: "Projects",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "type",
          label: "Type",
          type: "string",
          required: true,
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "preview",
          label: "Preview",
          type: "image",
        },
        {
          name: "codeLink",
          label: "Code link",
          type: "string",
        },
        {
          name: "previewLink",
          label: "Preview link",
          type: "string",
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
          isBody: true,
        },
      ],
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
      },
    },
  ],
};

export default portfolio;
