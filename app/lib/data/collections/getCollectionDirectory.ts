import { DirectorySection } from "../../models/directorySection.model";

export async function getCollectionDirectory(): Promise<DirectorySection[]> {
  const sections: DirectorySection[] = [
    {
      id: "1",
      size: "regular",
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: "2",
      size: "regular",
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: "3",
      size: "regular",
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: "4",
      size: "large",
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: "5",
      size: "large",
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return sections;
}
