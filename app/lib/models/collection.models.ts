import { Prisma } from "@prisma/client";

export interface CollectionMap {
  [key: string]: CategoryWithItems;
}

// Define a type that includes the relation fields
const categoryWithItems = Prisma.validator<Prisma.CategoryInclude>()({
  items: true,
});

type CategoryWithItems = Prisma.CategoryGetPayload<{
  include: typeof categoryWithItems;
}>;
