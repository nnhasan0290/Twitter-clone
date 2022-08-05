import Head from "next/head";
import CommentModal from "../components/CommentModal/CommentModal";

import LatestNews from "../components/NewsFeed/LatestNews";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home({ newsResult, randomUser }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <div className="flex bg-black">
        <div className="  lg:flex bg-black lg:min-h-screen hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex justify-around w-full  lg:ml-[25%]">
          <div className="w-full sm:w-[60%] bg-black text-white border-x border-[#2f3336]">
            <NewsFeed />
          </div>
          <div className="hidden md:flex w-[40%] bg-black text-white">
            <LatestNews
              newsResult={newsResult.articles}
              randomUser={randomUser.results}
            />
          </div>
        </div>
        <CommentModal />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let newsResult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  let randomUser = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: { newsResult, randomUser },
  };
}
