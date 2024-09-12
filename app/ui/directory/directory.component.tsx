import { DirectorySection } from "@/app/lib/models/directorySection.model";
import { MenuItem } from "../menu-item/menu-item.component";

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
