import { Collection } from "tinacms";

import { createLocaleRouter } from "@tina/utils/create-locale-router";
import { validateWebUrl } from "@tina/fields/validation";
import { seoField } from "@tina/fields/seo";

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
    router: createLocaleRouter("/portfolio"),
  },
  fields: [
    seoField,
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
          required: true,
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
          ui: {
            validate: validateWebUrl,
          },
        },
        {
          name: "previewLink",
          label: "Preview link",
          type: "string",
          ui: {
            validate: validateWebUrl,
          },
        },
        {
          name: "content",
          label: "Content",
          type: "rich-text",
          isBody: true,
        },
      ],
      ui: {
        defaultItem: {
          title: "New project",
          type: "Website",
        },
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
      },
    },
  ],
};

export default portfolio;
