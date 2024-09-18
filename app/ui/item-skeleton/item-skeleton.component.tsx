const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ItemSkeleton() {
  return (
    <div
      className={`${shimmer} flex flex-col w-full relative overflow-hidden  shadow-sm h-[350px]`}
    >
      <div className="flex-1">
        <div className="h-full flex items-end justify-center truncate  bg-slate-100 px-2 pb-4">
          <div className="h-[50px] w-full  bg-gray-200" />
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="ml-2 h-6 w-24 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-5 w-6 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
