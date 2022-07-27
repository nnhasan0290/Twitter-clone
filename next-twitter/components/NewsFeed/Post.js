import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ReceiptRefundIcon,
  ShareIcon,
} from "@heroicons/react/outline";

const Post = ({ post }) => {
  return (
    <div className="flex p-5 space-x-3 border-b-[#2f3336] border-b">
      <div>
        <img className="rounded-full" src={post.profileimg} width={50} alt="" />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex space-x-1">
            <h2 className="font-bold">{post.name}</h2>
            <span className="text-gray-500">{post.username}</span>
            <p className="text-gray-500">&middot; {post.timestamp}</p>
          </div>
          <DotsHorizontalIcon className="h-7 text-gray-500 cursor-pointer" />
        </div>
        <div className="text-[#e7e9ea]">
          <p>{post.caption}</p>
        </div>
        <div>
          <div className="mt-3 mb-1">
            <img className="rounded-xl" src={post.img} alt="" />
          </div>
          <div className="flex justify-between w-[80%] cursor-pointer">
            <div className="flex items-center space-x-2 hover:text-[#1d9bf0] group">
              <ChatIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#1d9bf0] group">
              <ReceiptRefundIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#1d9bf0] group">
              <HeartIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#1d9bf0] group">
              <ShareIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
