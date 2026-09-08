import type { Collection } from "tinacms";

type CollectionRouter = NonNullable<NonNullable<Collection["ui"]>["router"]>;

export function createLocaleRouter(pathname = ""): CollectionRouter {
  return ({ document }) => {
    const locale = document._sys.breadcrumbs[0];

    if (!locale) return;

    return `/${locale}${pathname}`;
  };
}
