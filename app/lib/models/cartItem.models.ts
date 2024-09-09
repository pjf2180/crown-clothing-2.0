import { CollectionItemModel } from "./collectionItem.models";

export type CartItemModel = CollectionItemModel & { quantity: number };
