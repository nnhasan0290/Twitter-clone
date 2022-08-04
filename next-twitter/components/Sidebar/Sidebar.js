import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/outline";
import SingleMenu from "./SingleMenu";
import { useSession, signIn } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 bottom-0 w-[25%] h-full py-3 pl-12 overflow-auto bg-black">
      <div>
        <img
          className="p-3 cursor-pointer hover-effect"
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          alt=""
          width={50}
        />
        <SingleMenu text="Home" Icon={HomeIcon} active />
        <SingleMenu text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SingleMenu text="Notification" Icon={BellIcon} />
            <SingleMenu text="Messages" Icon={InboxIcon} />
            <SingleMenu text="Bookmarks" Icon={BookmarkIcon} />
            <SingleMenu text="List" Icon={ClipboardIcon} />
            <SingleMenu text="Profile" Icon={UserIcon} />
            <SingleMenu text="More" Icon={DotsCircleHorizontalIcon} />
            <button className="w-[86%] p-3 text-xl font-medium text-center text-white bg-[#1d9bf0] rounded-full mt-2 mb-4 hover:brightness-95">
              Tweet
            </button>
          </>
        )}
        {!session && (
          <button
            onClick={signIn}
            className="w-[80%] p-3 text-xl font-medium text-center text-white bg-[#1d9bf0] rounded-full mt-2 mb-4 hover:brightness-95"
          >
            Sign In
          </button>
        )}
        {session && (
          <div className="flex justify-between hover-effect items-center w-[95%]">
            <div className="flex justify-between m-2 space-x-3 text-white">
              <img
                className="rounded-full"
                src={session.user.image}
                width={40}
                height={40}
              />
              <div className="leading-5">
                <h4>{session.user.name}</h4>
                <p className="font-thin text-gray-400">
                  @{session.user.name.slice(0, 6).toLowerCase()}
                </p>
              </div>
            </div>
            <div>
              <DotsHorizontalIcon className="h-5 mr-3 text-white w-7" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
