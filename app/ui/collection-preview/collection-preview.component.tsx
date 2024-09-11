import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { CollectionItem } from "../collection-item/collection-item.component";

export interface CollectionPreviewProps {
  title: string;
  items: CollectionItemModel[];
  itemCount?: number;
}
export function CollectionPreview({ items, title, itemCount = 4 }: CollectionPreviewProps) {
  return (
    <div className="collection-preview">
      <h2 className="text-3xl mb-1">{title.toUpperCase()}</h2>
      <div className="grid grid-cols-2 gap-[5px] row-gap-[40px] mb-6 md:flex md:justify-center md:w-full">
        {items
          .filter((_, idx) => idx < itemCount)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
