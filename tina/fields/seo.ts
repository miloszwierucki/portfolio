import type { TinaField } from "tinacms";

export const seoField: TinaField = {
  type: "object",
  name: "seo",
  label: "SEO",
  required: true,
  fields: [
    {
      type: "string",
      name: "title",
      label: "Meta title",
      required: true,
      ui: {
        description: "Recommended length: 50-60 characters.",
      },
    },
    {
      type: "string",
      name: "description",
      label: "Meta description",
      required: true,
      ui: {
        component: "textarea",
        description: "Recommended length: 140-160 characters.",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Social image",
      ui: {
        description: "Used by Open Graph and social media cards.",
      },
    },
  ],
};
