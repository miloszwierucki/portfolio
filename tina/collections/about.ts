import { Collection, Template } from "tinacms";

import { iconSchema } from "../fields/icon";

const timelineBlock: Template = {
  name: "timelineBlock",
  label: "Timeline",
  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return { label: item?.title };
    },
  },
  fields: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    iconSchema,
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "items",
      label: "Timeline items",
      fields: [
        {
          type: "string",
          label: "Company name",
          name: "company",
        },
        {
          type: "string",
          label: "Period",
          name: "period",
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description",
          isBody: true,
        },
      ],
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.company };
        },
      },
    },
  ],
};

const about: Collection = {
  name: "about",
  label: "About",
  path: "content/about",
  format: "md",
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
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      label: "About content",
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
      name: "timeline",
      label: "Timeline",
      templates: [timelineBlock],
      ui: {
        max: 2,
      },
    },
  ],
};

export default about;
