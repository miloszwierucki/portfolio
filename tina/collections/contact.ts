import { Collection } from "tinacms";

const contact: Collection = {
  name: "contact",
  label: "Contact",
  path: "content/contact",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => {
      return "/contact";
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
      label: "Contact content",
      name: "description",
      isBody: true,
      type: "rich-text",
      overrides: {
        toolbar: ["link", "bold", "italic", "code", "raw"],
      },
    },
    {
      label: "E-mail Input",
      name: "email",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "placeholder",
          label: "Placeholder",
          type: "string",
        },
      ],
    },
    {
      label: "Name Input",
      name: "name",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "placeholder",
          label: "Placeholder",
          type: "string",
        },
      ],
    },
    {
      label: "Message Textarea",
      name: "message",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "placeholder",
          label: "Placeholder",
          type: "string",
        },
      ],
    },
    {
      label: "Privacy Policy",
      name: "privacy",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          isBody: true,
          type: "rich-text",
          overrides: {
            toolbar: ["link", "bold", "italic", "code", "raw"],
          },
          required: true,
        },
      ],
    },
    {
      label: "Submit button",
      name: "button",
      type: "object",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "pendingLabel",
          label: "Pending label",
          type: "string",
          required: true,
        },
      ],
    },
  ],
};

export default contact;
