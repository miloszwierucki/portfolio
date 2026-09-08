import { Collection } from "tinacms";

import { createLocaleRouter } from "../utils/create-locale-router";

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
    router: createLocaleRouter(),
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
          options: [
            { label: "Home", value: "/" },
            { label: "About", value: "/about" },
            { label: "Portfolio", value: "/portfolio" },
            { label: "Contact", value: "/contact" },
          ],
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
