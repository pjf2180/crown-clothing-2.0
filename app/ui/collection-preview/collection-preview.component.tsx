import { CollectionItem } from "../collection-item/collection-item.component";

export interface CollectionPreviewProps {
  title: string;
  items: { id: string; name: string; price: number; imageUrl: string }[];
  itemCount: number;
}
export function CollectionPreview(props: CollectionPreviewProps) {
  const { items, title, itemCount } = props;

  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="grid grid-cols-2 gap-[5px] row-gap-[50px] md:flex md:justify-center md:w-full">
        {items
          .filter((_, idx) => idx < itemCount)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
