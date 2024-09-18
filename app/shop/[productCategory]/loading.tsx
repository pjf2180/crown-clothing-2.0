import { ItemSkeleton } from "@/app/ui/item-skeleton/item-skeleton.component";
import { GalleryLayout } from "@/app/ui/layouts/gallery/gallery-layout.component";
export default function Loading() {
  return (
    <GalleryLayout title="">
      {new Array(20).fill(0).map(() => (
        <ItemSkeleton />
      ))}
    </GalleryLayout>
  );
}