import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";

const LatestNews = ({ newsResult, randomUser }) => {
  console.log(randomUser);
  const [newsState, setNewsState] = useState(4);
  const [userState, setUser] = useState(4);
  return (
    <div className="mx-6 w-full">
      <div className="sticky top-0 py-1 bg-black">
        <div className="flex bg-[#202327] p-2 space-x-3 rounded-full">
          <SearchIcon className="px-1 h-6 text-gray-600" />
          <input
            className="bg-[#202327] w-full focus:outline-none"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="box-border overflow-y-auto fixed bottom-0 top-12 mr-6 no-scrollbar">
        <div className="bg-[#202327] p-4 rounded-xl my-2">
          <div className="py-2 text-xl font-bold">
            <h2>What's happening</h2>
          </div>
          <div>
            {newsResult.slice(0, newsState).map((each, i) => (
              <div key={i} className="flex items-center my-3 space-x-1">
                <div>
                  <h4>{each.title}</h4>
                  <span className="text-sm font-thin">{each.author}</span>
                </div>
                <img
                  className="w-[30%] h-[70px] rounded-xl"
                  src={each.urlToImage}
                  alt="Picture not Found"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setNewsState(newsState + 3);
            }}
            className="text-[#1d9bf0]"
          >
            Show More
          </button>
        </div>
        <div className="bg-[#202327] py-4 rounded-xl my-4">
          <div className="px-4 py-2 text-xl font-bold">
            <h2>Who To Follow</h2>
          </div>
          {randomUser.slice(0, userState).map((each, i) => (
            <div className="flex justify-between items-center p-4 hover:cursor-pointer hover:bg-[#2c2e30] transition duration-300 ease-in">
              <div className="flex items-center space-x-3">
                <img
                  className="w-[45px] rounded-full"
                  src={each.picture.thumbnail}
                  alt=""
                />
                <div className="">
                  <h3 className="p-0 m-0 font-bold truncate">
                    {each.name.first + " " + each.name.last}{" "}
                  </h3>
                  <span className="text-[13px] font-thin">
                    {each.login.username}
                  </span>
                </div>
              </div>
              <div>
                <button className="px-3 py-1 bg-[#eff3f4] rounded-full text-black font-medium ">
                  Follow
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setUser(userState + 3);
            }}
            className="px-4 text-[#1d9bf0] py-2"
          >
            Show More
          </button>
        </div>
        <div className="font-thin text-[#95989e] traking-tighter">
          <p>
            terms of service privacy policy cookie policy accesibility ads info
            more... <br /> twitter 2022, inc.
          </p>
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
