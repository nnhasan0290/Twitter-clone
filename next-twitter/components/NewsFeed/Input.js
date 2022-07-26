import {
  EmojiHappyIcon,
  GlobeIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
const Input = () => {
  return (
    <div className="flex px-3 space-x-3 border-b-[#2f3336] border-b">
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1388686885761867777/uh1KnJNr_400x400.jpg"
          width={50}
          alt=""
          className="rounded-full cursor-pointer"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
            name="post"
            id="post"
            cols="30"
            rows="1"
            placeholder="What's Happening?"
            className="w-full text-xl tracking-wider placeholder-gray-500 bg-black border-none resize-none focus:outline-0"
          ></textarea>
          <div className="flex items-center py-3 pl-2 space-x-2 border-b-[1px] border-b-[#2f3336]">
            <GlobeIcon className="h-4 text-[#1d9bf0]"/>
            <p className="font-medium text-[#1d9bf0]">Everybody can replay</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="flex space-x-2">
            <PhotographIcon className="h-5 text-[#1d9bf0]" />
            <EmojiHappyIcon className="h-5 text-[#1d9bf0]" />
          </div>
          <div>
            <button
              className="px-3 py-1.5 font-medium bg-[#1d9bf0] rounded-full opacity-50 tacking-wider" 
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Input;
