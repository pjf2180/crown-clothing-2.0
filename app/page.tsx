import { Header } from "./ui/header/header.component";
import { Directory } from "./ui/directory/directory.component";

export default function Home() {
  return (
    <main className="">
      <Header currentUser={null} hiddenCart={true} isAdmin={false} />
      <div className="flex flex-col items-center">
        <Directory
          sections={[
            {
              id: "1",
              size: "reg",
              title: "Hats",
              imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            },
            {
              id: "1",
              size: "reg",
              title: "Jackets",
              imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            },
            {
              id: "1",
              size: "reg",
              title: "Sneakers",
              imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            },
            {
              id: "1",
              size: "large",
              title: "Womens",
              imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            },
            {
              id: "1",
              size: "large",
              title: "Mens",
              imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            },
          ]}
        />
      </div>
    </main>
  );
}
