import BottomBar from "@/components/BottomBar";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full md:flex">
        <TopBar/>
        <SideBar/>

        <section className="flex flex-1 h-full px-10 lg:px-16 pt-10 flex-col">
          <p className="text-3xl md:text-4xl text-white font-semibold">Home Feed</p>
          <div className="max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9 pt-10">
            <p className="text-white">posts</p>
          </div>
        </section>

        <section className="hidden lg:flex flex-1 h-full px-10 pt-10 bg-dark-2 flex-col">
          <p className="text-3xl text-white font-semibold pl-8">Top Sellers</p>
          <div className="w-full grid grid-cols-2 gap-7 items-center pt-10 pl-10">
            <p className="text-white bg-white">posts</p>
            <p className="text-white bg-white">posts</p>
            <p className="text-white">posts</p>
            <p className="text-white">posts</p>
            <p className="text-white">posts</p>
            <p className="text-white">posts</p>
          </div>
        </section>
        <BottomBar/>
      </div>
    </main>
  );
}
