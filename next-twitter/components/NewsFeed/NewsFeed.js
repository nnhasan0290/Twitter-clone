import { SparklesIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Input from "./Input";
import Post from "./Post";

const NewsFeed = () => {
  const [posts, setPost] = useState([]);
  console.log(posts);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          console.log(snapshot.docs, "snapshot");
          setPost(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className="">
      <div className="z-10 flex sticky top-0 justify-between px-2 pt-2 pb-1 backdrop-filter backdrop-blur-md backdrop-saturate-50">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="">
          <SparklesIcon className="p-2 h-10 hover-effect" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Post key={post.id} id={post.id} post={post} />
        </motion.div>
      ))}
    </div>
  );
};
export default NewsFeed;
