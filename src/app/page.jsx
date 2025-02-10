import DraftSelected from "@/components/draftSelected";
import DraftHeroList from "@/components/draftHeroList";
import BanList from "@/components/banList";
// import Test3 from "./test3";

export default function Page() {
  return (
    <main className="flex flex-col lg:flex-grow  h-full">
      <DraftSelected />
      <div className="mt-auto flex flex-col w-full h-1/2">
        <BanList />
        <DraftHeroList />
      </div>
    </main>
  );
}
