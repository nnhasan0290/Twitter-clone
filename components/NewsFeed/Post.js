import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ReceiptRefundIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as Heart } from "@heroicons/react/solid";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { modalState, clickedPost } from "../../Atom/modalState";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Post = ({ post, id }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([false]);
  const [open, setOpen] = useRecoilState(modalState);
  const [clickPost, setClickedPost] = useRecoilState(clickedPost);
  const router = useRouter();

  const heartIcon = hasLiked ? (
    <>
      <Heart
        className={`text-[#1d9bf0] p-2 w-9 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]`}
      />
      <span className="text-[#1d9bf0]">
        {likes.length !== 0 && likes.length}
      </span>
    </>
  ) : (
    <>
      <HeartIcon
        className={`p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]`}
      />{" "}
      <span>{likes.length !== 0 && likes.length}</span>
    </>
  );
  {
    /**liked post method */
  }
  const likePost = () => {
    if (session?.user) {
      if (hasLiked) {
        deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
      } else {
        setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
          username: session?.user?.username,
        });
      }
    } else {
      router.push("/api/auth/signin");
    }
  };
  {
    /**delete post method */
  }
  const deletePost = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", id));
      if (post?.data()?.image) {
        deleteObject(ref(storage, `posts/${id}/image`));
      }
    }
  };
  {
    /**useEffects here */
  }
  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db]);
  useEffect(() => {
    setHasLiked(
      likes.findIndex((each) => each.id === session?.user?.uid) !== -1
    );
  }, [likes, session?.user]);
  return (
    <div className="flex p-5 space-x-3 border-b-[#2f3336] border-b">
      <div>
        <img
          className="rounded-full"
          src={post?.data()?.userImg}
          width={50}
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex space-x-1">
            <h2 className="font-bold">{post?.data()?.name}</h2>
            <span className="text-gray-500">{post?.data()?.username}</span>
            <p className="text-gray-500">
              &middot;{" "}
              <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
            </p>
          </div>
          <DotsHorizontalIcon className="h-7 text-gray-500 cursor-pointer" />
        </div>
        <div className="text-[#e7e9ea]">
          <p>{post?.data()?.text}</p>
        </div>
        <div>
          <div className="mt-3 mb-1">
            <img className="rounded-xl" src={post?.data()?.image} alt="" />
          </div>
          <div className="flex justify-between w-[80%] cursor-pointer">
            <div
              className="flex items-center space-x-2 hover:text-[#1d9bf0] group"
              onClick={() => {
                if (session?.user) {
                  setOpen(!open);
                  setClickedPost(id);
                } else {
                  router.push("/api/auth/signin");
                }
              }}
            >
              <ChatIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>
            {session?.user?.uid === post.data().id && (
              <div
                className="flex items-center space-x-2 hover:text-[#1d9bf0] group"
                onClick={deletePost}
              >
                <TrashIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              </div>
            )}
            <div className="flex items-center space-x-2 hover:text-[#1d9bf0] group">
              <ReceiptRefundIcon className="p-2 w-9 text-gray-600 hover-effect group-hover:text-[#1d9bf0] group-hover:bg-[#080b1b]" />
              <span>35</span>
            </div>

            <div
              className={`flex items-center space-x-1 hover:text-[#1d9bf0] group `}
              onClick={likePost}
            >
              {heartIcon}
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
