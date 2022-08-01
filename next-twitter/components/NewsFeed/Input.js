import {
  EmojiHappyIcon,
  GlobeIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Input = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="flex px-3 space-x-3 border-b-[#2f3336] border-b">
          <div>
            <Image
              src={session.user.image}
              width={50}
              height={50}
              alt="image"
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
                className="w-full text-xl tracking-wider placeholder-gray-500 bg-black border-none resize-none focus:outline-0 peer"
              ></textarea>
              <div className="hidden items-center py-3 pl-2 space-x-2 border-b-[1px] border-b-[#2f3336] peer-focus:flex">
                <GlobeIcon className="h-4 text-[#1d9bf0]" />
                <p className="font-medium text-[#1d9bf0]">
                  Everybody can replay
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="flex space-x-2">
                <PhotographIcon className="h-5 text-[#1d9bf0]" />
                <EmojiHappyIcon className="h-5 text-[#1d9bf0]" />
              </div>
              <div>
                <button className="px-3 py-1.5 font-medium bg-[#1d9bf0] rounded-full opacity-50 tacking-wider">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Input;
