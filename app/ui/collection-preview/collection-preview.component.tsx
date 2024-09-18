import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { CollectionItem } from "../collection-item/collection-item.component";
import { CollectionPreviewLayout } from "./collection-preview-layout";

export interface CollectionPreviewProps {
  title: string;
  items: CollectionItemModel[];
  itemCount?: number;
}
export function CollectionPreview({
  items,
  title,
  itemCount = 4,
}: CollectionPreviewProps) {
  return (
    <CollectionPreviewLayout title={<h2 className="text-3xl mb-1">{title}</h2>}>
      {items
        .filter((_, idx) => idx < itemCount)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewLayout>
  );
}
