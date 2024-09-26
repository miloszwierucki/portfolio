import { Collection } from "tinacms";

import { iconSchemaRequired } from "../fields/icon";

const sidebar: Collection = {
  name: "sidebar",
  label: "Sidebar",
  path: "content/sidebar",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => {
      return "/";
    },
  },
  fields: [
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "name",
      label: "Name",
      type: "string",
      required: true,
    },
    {
      name: "role",
      label: "Role",
      type: "string",
      required: true,
    },
    {
      type: "object",
      label: "Info",
      name: "blocks",
      list: true,
      fields: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        iconSchemaRequired,
        {
          type: "string",
          label: "Label",
          name: "label",
          required: true,
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          required: true,
        },
        {
          type: "string",
          label: "Action",
          name: "action",
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.label };
        },
      },
    },
  ],
};

export default sidebar;
