import { Collection } from "tinacms";

const settings: Collection = {
  name: "settings",
  label: "Settings",
  path: "content/settings",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Navbar",
      name: "navbar",
      list: true,
      fields: [
        {
          type: "string",
          label: "Label",
          name: "label",
          required: true,
        },
        {
          type: "string",
          label: "Href",
          name: "href",
          required: true,
          ui: {
            validate: (value) => {
              const isValid = value.startsWith("/");
              if (!isValid) {
                return "The href must start with a slash";
              }
            },
          },
        },
      ],
      ui: {
        defaultItem: {
          label: "",
          href: "/",
        },
        max: 5,
        min: 1,
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.label };
        },
      },
    },
  ],
};

export default settings;
