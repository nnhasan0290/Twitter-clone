import {
  EmojiHappyIcon,
  GlobeIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Input = () => {
  const { data: session } = useSession();
  const [inputVal, setInputVal] = useState("");
  const [inputImg, setInputImg] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const file_picker_ref = useRef(null);
  const [loading, setLoading] = useState(false);

  {
    /* ==================== Method =====================*/
  }
  const sendPost = async () => {
    setShowEmoji(false);
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      name: session.user.name,
      text: inputVal,
      timestamp: serverTimestamp(),
      username: session.user.username,
      userImg: session.user.image,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (inputImg) {
      await uploadString(imageRef, inputImg, "data_url");
      const downloadUrl = await getDownloadURL(imageRef);
      console.log(downloadUrl);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadUrl,
      });

      console.log("img added");
    }

    setInputVal("");
    setInputImg(null);
    setLoading(false);
  };
  return (
    <>
      {session && (
        <div className="flex px-3 space-x-3 border-b-[#2f3336] border-b ">
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
                onChange={async (e) => {
                  setInputVal(e.target.value);
                }}
                value={inputVal}
                className="w-full text-xl tracking-wider placeholder-gray-500 bg-black border-none resize-none focus:outline-0 peer"
              ></textarea>
              {inputImg && (
                <div className="relative my-2">
                  <XIcon
                    className="absolute top-0 left-0 w-10 p-2 bg-gray-500 rounded-full cursor-pointer"
                    onClick={() => {
                      setInputImg(null);
                    }}
                  />
                  <img
                    src={inputImg}
                    alt=""
                    className={`rounded-lg ${
                      loading && "animate-pulse"
                    } max-h-[300px]`}
                  />
                </div>
              )}

              <div
                className={`${
                  !inputVal && "hidden"
                } items-center justify-start py-3 ml-2 space-x-2 border-b-[1px] border-b-[#2f3336] ${
                  inputVal && "flex"
                }`}
              >
                <GlobeIcon className="h-4 text-[#1d9bf0]" />
                <p className="font-medium text-[#1d9bf0]">
                  Everybody can replay
                </p>
              </div>
            </div>
            {!loading && (
              <div className="flex items-center justify-between my-3">
                <div className="flex space-x-2 cursor-pointer">
                  <div>
                    <PhotographIcon
                      className="h-5 text-[#1d9bf0]"
                      onClick={(e) => {
                        setShowEmoji(false);
                        file_picker_ref.current.click();
                      }}
                    />
                    <input
                      hidden
                      type="file"
                      name="post-img"
                      id="post-img"
                      ref={file_picker_ref}
                      onChange={(e) => {
                        let reader = new FileReader();
                        if (e.target.files[0]) {
                          reader.readAsDataURL(e.target.files[0]);
                        }
                        reader.onload = (readerEvent) => {
                          setInputImg(readerEvent.target.result);
                        };
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setShowEmoji(!showEmoji);
                    }}
                  >
                    <EmojiHappyIcon className="h-5 text-[#1d9bf0]" />
                  </div>
                </div>
                <div>
                  <button
                    onClick={sendPost}
                    disabled={!inputVal.trim()}
                    className="px-3 py-1.5 font-medium bg-[#1d9bf0] rounded-full tacking-wider disabled:opacity-50 hover:brightness-90"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {showEmoji && (
        <div className="absolute max-w-[300px]">
          <Picker
            data={data}
            onClickOutside={!showEmoji}
            onEmojiSelect={(e) => {
              try {
                let emoji = String.fromCodePoint("0x" + e.unified);
                setInputVal(inputVal + emoji);
              } catch (error) {
                console.log(error);
              }
            }}
            theme="dark"
          ></Picker>
        </div>
      )}
    </>
  );
};
export default Input;
