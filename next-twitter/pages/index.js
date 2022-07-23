import Head from "next/head";
import LatestNews from "../components/NewsFeed/LatestNews";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <div className="flex">
        <div className="w-[25%] hidden lg:flex bg-black min-h-screen">
          <Sidebar />
        </div>
        <div className="flex justify-around w-full lg:w-[75%]">
          <div className="w-full sm:w-[70%] bg-black text-white border-x">
            <NewsFeed />
          </div>
          <div className="hidden md:flex w-[30%] bg-black text-white">
            <LatestNews />
          </div>
        </div>
      </div>
    </>
  );
}
