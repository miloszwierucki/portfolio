import { Collection } from "tinacms";

import { createLocaleRouter } from "@tina/utils/create-locale-router";
import { seoField } from "@tina/fields/seo";

const privacy: Collection = {
  name: "privacy",
  label: "Privacy",
  path: "content/privacy",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: createLocaleRouter("/privacy"),
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
      label: "Privacy content",
      name: "description",
      isBody: true,
      type: "rich-text",
      overrides: {
        toolbar: ["link", "bold", "italic", "code", "raw"],
      },
    },
  ],
};

export default privacy;
