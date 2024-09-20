import { Collection, Template } from "tinacms";

const aboutBlock: Template = {
  name: "aboutBlock",
  label: "about",
  // ui: {
  //   defaultItem: {
  //     tagline: "Here's some text above the other text",
  //     headline: "This Big Text is Totally Awesome",
  //     text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
  //   },
  // },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      label: "Content",
      name: "content",
      isBody: true,
      type: "rich-text",
      toolbarOverride: ["link", "bold", "italic", "code", "raw"],
    },
  ],
};

// const featureBlock: Template = {
//   name: "features",
//   label: "Features",
//   fields: [
//     {
//       type: "object",
//       label: "Feature Items",
//       name: "items",
//       list: true,
//       fields: [
//         {
//           type: "string",
//           label: "Title",
//           name: "title",
//         },
//         {
//           type: "string",
//           label: "Text",
//           name: "text",
//         },
//       ],
//     },
//   ],
// };

const about: Collection = {
  name: "about",
  label: "About",
  path: "content/about",
  format: "md",
  // ui: {
  //   allowedActions: {
  //     create: false,
  //     delete: false,
  //   },
  // },
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [aboutBlock],
      ui: {
        max: 3,
      },
    },
  ],
};

export default about;
