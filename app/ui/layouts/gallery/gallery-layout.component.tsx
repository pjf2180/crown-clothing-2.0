import React from "react";

export function GalleryLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
              flex
              flex-col
              items-center
              w-full`}
    >
      <h1
        className={`
                  text-[38px]
                  font-normal
                  mx-auto mb-[30px]
              `}
      >
        {title}
      </h1>
      <div
        className={`
                  grid 
                  grid-cols-2
                  gap-[10px] 
                  w-full
                  md:grid-cols-3
                  lg:grid-cols-4
              `}
      >
        {children}
      </div>
    </div>
  );
}
