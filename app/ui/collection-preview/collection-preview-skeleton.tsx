import { ItemSkeleton } from "../item-skeleton/item-skeleton.component";
import { CollectionPreviewLayout } from "./collection-preview-layout";

export function CollectionPreviewSkeleton() {
  return (
    <>
      {new Array(5).fill(0).map((_, i) => (
        <CollectionPreviewLayout key={i} title={<div>PLACEHOLDER</div>}>
          {new Array(4).fill(0).map((_, i) => (
            <ItemSkeleton key={i} />
          ))}
        </CollectionPreviewLayout>
      ))}
    </>
  );
}
