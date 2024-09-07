import { DirectorySection } from "@/app/lib/models/directorySection.model";
import { DirectoryLink } from "./directory-link.component";

export interface MenuItemProps {
  id: string;
  title: string;
  imageUrl: string;
  size?: "large" | "regular";
  linkUrl: string;
}

export function MenuItem({ title, imageUrl, size, linkUrl }: MenuItemProps) {
  const backgroundImageClass =
    "w-full h-full bg-center bg-cover hover:scale-[1.1] transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)]";
  const menuItemBaseClass =
    "min-w-[30%] h-[240px] flex-1 flex items-center justify-center border border-black m-[0_7.5px_15px] overflow-hidden hover:cursor-pointer";
  const menuItemLargeClass = `${menuItemBaseClass} h-[380px] sm:h-[200px]`;
  const menuItemClass =
    size === "large" ? menuItemLargeClass : menuItemBaseClass;
  return (
    <div className={`${menuItemClass} relative`}>
      <DirectoryLink linkTo={linkUrl} />
      <div
        className={backgroundImageClass}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="h-[90px] px-[25px] flex flex-col items-center justify-center border border-black opacity-70 bg-white absolute">
        <h1 className="font-bold mb-[6px] text-[22px] text-[#4a4a4a]">
          {title.toUpperCase()}
        </h1>
        <span className="font-light text-[16px]">Shop</span>
      </div>
    </div>
  );
}

export interface DirectoryProps {
  sections: DirectorySection[];
}
export function Directory({ sections }: DirectoryProps) {
  return (
    <div className="w-full flex flex-wrap justify-between mt-[40px]">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            id={section.id}
            imageUrl={section.imageUrl}
            size={section.size}
            title={section.title}
            linkUrl={`/shop/${section.title.toLowerCase()}`}
          ></MenuItem>
        );
      })}
    </div>
  );
}
