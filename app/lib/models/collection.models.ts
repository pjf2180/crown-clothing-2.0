import { CollectionItemModel } from "./collectionItem.models";

export interface Collection {
  id: string;
  routeName: string;
  title: string;
  items: CollectionItemModel[];
}

export interface CollectionMap {
  [key: string]: Collection;
}
