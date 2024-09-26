import { Collection } from "tinacms";

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
    router: () => {
      return "/privacy";
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
      label: "Privacy content",
      name: "description",
      isBody: true,
      type: "rich-text",
      toolbarOverride: ["link", "bold", "italic", "code", "raw"],
    },
  ],
};

export default privacy;
