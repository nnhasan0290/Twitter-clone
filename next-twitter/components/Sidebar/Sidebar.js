
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon} from '@heroicons/react/solid';
import SingleMenu from './SingleMenu';
const Sidebar = () => {
  return (
    <div className="fixed py-3 pl-12 h-full bg-black">
      <img className="p-3 cursor-pointer hover-effect"
        src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        alt=""
        width={50} 
      />
      <SingleMenu text="Home" Icon={HomeIcon} active/>
      <SingleMenu text="Explore" Icon={HashtagIcon}/>
      <SingleMenu text="Notification" Icon={BellIcon}/>
      <SingleMenu text="Messages" Icon={InboxIcon}/>
      <SingleMenu text="Bookmarks" Icon={BookmarkIcon}/>
      <SingleMenu text="List" Icon={ClipboardIcon}/>
      <SingleMenu text="Profile" Icon={UserIcon}/>
      <SingleMenu text="More" Icon={DotsCircleHorizontalIcon}/>
      <button className='p-3 w-full text-xl font-medium text-center text-white bg-blue-700 rounded-full'>Tweet</button>
    </div>
  );
};
export default Sidebar;
