
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const NewsFeed = () => {
  const posts = [
    {
      id: 1,
      name: "Nazmul Hasan",
      username: "@Nzhnl",
      img: "https://images.unsplash.com/photo-1658828740536-4cdfe52b6927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      profileimg: "https://pbs.twimg.com/profile_images/1388686885761867777/uh1KnJNr_400x400.jpg",
      timestamp: "1h ago",
      caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit urna eget, suspendisse natoque tortor aliquet parturient auctor phasellus nunc, faucibus molestie sed cubilia felis ridiculus platea duis. Nullam libero gravida velit nisi "
    },
    {
      id: 1,
      name: "Nazmul Hasan",
      username: "@Nzhnl",
      img: "https://images.unsplash.com/photo-1658828740536-4cdfe52b6927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      profileimg: "https://pbs.twimg.com/profile_images/1388686885761867777/uh1KnJNr_400x400.jpg",
      timestamp: "1h ago",
      caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit urna eget, suspendisse natoque tortor aliquet parturient auctor phasellus nunc, faucibus molestie sed cubilia felis ridiculus platea duis. Nullam libero gravida velit nisi "
    }
  ]
  return (
    <div className="">
      <div className="flex sticky top-0 justify-between px-2 pt-2 pb-1 backdrop-filter backdrop-blur-md backdrop-saturate-50">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="">
          <SparklesIcon className="p-2 h-10 hover-effect" />
        </div>
      </div>
      <Input/>
      {
      posts.map((post) => (
        <Post key={post.id} id={post.id} post={post}/>
      ))
    }
    </div>
  );
};
export default NewsFeed;
