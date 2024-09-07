import { Header } from "./ui/header/header.component";
import { Directory } from "./ui/directory/directory.component";
import { DirectorySection } from "./lib/models/directorySection.model";
import { getCollectionDirectory } from "./lib/data/collections/getCollectionDirectory";

export default async function Home() {
  const directorySections: DirectorySection[] = await getCollectionDirectory();

  return (
    <main className="">
      <Header currentUser={null} hiddenCart={true} isAdmin={false} />
      <div className="flex flex-col items-center">
        <Directory sections={directorySections} />
      </div>
    </main>
  );
}
