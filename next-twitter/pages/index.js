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
          <div className="w-full sm:w-[65%] bg-black text-white border-x border-[#2f3336]">
            <NewsFeed />
            <h2>hi there</h2>
          </div>
          <div className="hidden md:flex w-[35%] bg-black text-white">
            <LatestNews />
          </div>
        </div>
      </div>
    </>
  );
}
