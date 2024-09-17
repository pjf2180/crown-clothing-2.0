import {
  CollectionPreviewModel,
  getCollectionPreview,
} from "../lib/data/collections/getCollectionPreview";
import { CollectionPreview } from "../ui/collection-preview/collection-preview.component";

export default async function ShopPage() {
  const previews = await getCollectionPreview();

  return previews.map((preview: CollectionPreviewModel) => {
    return (
      <CollectionPreview
        key={preview.name}
        title={preview.name}
        items={preview.items}
      />
    );
  });
}
