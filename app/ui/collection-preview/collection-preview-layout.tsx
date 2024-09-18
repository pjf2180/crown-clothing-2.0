interface CollectionPreviewLayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
}
export function CollectionPreviewLayout({
  title,
  children: items,
}: CollectionPreviewLayoutProps) {
  return (
    <>
      {title}
      <div className="grid grid-cols-2 gap-[5px] row-gap-[40px] mb-6 md:flex md:justify-center md:w-full">
        {items}
      </div>
    </>
  );
}
