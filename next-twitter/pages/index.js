import Head from "next/head";

import LatestNews from "../components/NewsFeed/LatestNews";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home({newsResult, randomUser}) {
  
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <div className="flex bg-black">
        <div className="w-[25%] hidden lg:flex bg-black min-h-screen">
          <Sidebar />
        </div>
        <div className="flex justify-around w-full lg:w-[75%]">
          <div className="w-full sm:w-[60%] bg-black text-white border-x border-[#2f3336]">
            <NewsFeed />
          </div>
          <div className="hidden md:flex w-[40%] bg-black text-white">
            <LatestNews  newsResult={newsResult.articles} randomUser={randomUser.results} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){
   let newsResult = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json').then(res => res.json());

   let randomUser = await fetch('https://randomuser.me/api/?results=30&inc=name,login,picture').then(res => res.json());
   
   return{
    props: {newsResult, randomUser}
   }
}
