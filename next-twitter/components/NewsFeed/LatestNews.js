import { SearchIcon } from "@heroicons/react/outline";

const LatestNews = () => {
  return (
    <div className="mx-3 w-full">
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
      <h2 className="">hi there</h2>
    </div>
  );
};
export default LatestNews;
