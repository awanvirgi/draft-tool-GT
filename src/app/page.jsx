import DraftSelected from "@/components/draftSelected";
import DraftHeroList from "@/components/draftHeroList";
import BanList from "@/components/banList";
// import Test3 from "./test3";

export default function Page() {
  return (
    <main className="flex flex-col grow">
      <DraftSelected  />
      <div className="mt-auto">
        <BanList />
        <DraftHeroList  />
      </div>
      {/* <Test3 /> */}

    </main>
  );
}
