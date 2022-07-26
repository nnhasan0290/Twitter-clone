
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

const NewsFeed = () => {
  return (
    <div className="">
      <div className="flex justify-between p-3">
        <h2 className="text-xl font-bold">Home</h2>
        <div className="">
          <SparklesIcon className="p-2 h-10 hover-effect" />
        </div>
      </div>
      <Input/>
    </div>
  );
};
export default NewsFeed;
