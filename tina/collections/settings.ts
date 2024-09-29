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
              // const isValid = value.startsWith("/");
              const isValid = [
                "/",
                "/about",
                "/portfolio",
                "/contact",
              ].includes(value);
              if (!isValid) {
                // return "The href must start with a slash";
                return "The href must be a valid path (/, /portfolio, /contact)";
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
        max: 3,
        min: 3,
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.label };
        },
      },
    },
  ],
};

export default settings;
