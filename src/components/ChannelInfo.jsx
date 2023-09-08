import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { IoMdShareAlt } from "react-icons/io";
import { AiOutlineDownload, AiOutlineScissor } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";

export default function ChannelInfo({
  id: channelId,
  title,
  channelTitle,
  description,
}) {
  const [imageURL, setImageURL] = useState();
  const [subscriber, setSubscriber] = useState();

  const { youtube } = useYoutubeApi();

  const { data: channelInfo } = useQuery(
    ["channelData", channelId],
    async () => youtube.channelInfo(channelId),
    { staleTime: 1000 * 60 * 1 }
  );

  useEffect(() => {
    getChannelData();
  }, [channelInfo]);

  const channelImgURL =
    (channelInfo && channelInfo.snippet.thumbnails.default.url) ||
    (channelInfo && channelInfo.snippet.thumbnails.medium.url) ||
    (channelInfo && channelInfo.snippet.thumbnails.high.url);

  const getChannelData = () => {
    setImageURL(channelImgURL);
    handleFormatter(channelInfo && channelInfo.statistics.subscriberCount);
  };

  const handleFormatter = (subscriber) => {
    const formatter = new Intl.NumberFormat("ko", { notation: "compact" });
    const count = formatter.format(subscriber);
    setSubscriber(count);
  };

  return (
    <article className="bg-[#18181d] w-full h-[500px] mobile:h-full p-5">
      <div className="tablet:flex-col tablet:items-start flex justify-between items-center mt-7 mb-7">
        <div className="flex items-center">
          {imageURL && (
            <img
              src={imageURL}
              alt="channelImage"
              className="rounded-full w-[50px] h-[50px] mr-4"
            />
          )}
          <div>
            <h2 className="p-1">{channelTitle}</h2>
            <strong className="p-1 text-[#ccc]">
              구독자 : {subscriber && subscriber}명
            </strong>
          </div>
          <button className="hover:opacity-70 ease-in duration-100 rounded-full bg-white text-black pt-1 pb-1 pl-4 pr-4 ml-3 font-semibold">
            구독
          </button>
        </div>
        <div className="tablet:mt-5 flex flex-col text-sm">
          <div>
            <button className="hover:opacity-70 ease-in duration-100  rounded-full bg-white text-black pt-1 pb-1 pl-4 pr-4 font-semibold">
              <div className="flex items-center">
                <IoMdShareAlt />
                <p className="ml-2">공유</p>
              </div>
            </button>
            <button className="hover:opacity-70 ease-in duration-100 rounded-full bg-white text-black font-semibold pt-1 pb-1 pl-4 pr-4 ml-3 ">
              <div className="flex items-center">
                <AiOutlineScissor />
                <p className="ml-2">클립</p>
              </div>
            </button>
            <button className="hover:opacity-70 ease-in duration-100 rounded-full bg-white text-black font-semibold pt-1 pb-1 pl-4 pr-4 ml-3">
              <div className="flex items-center">
                <AiOutlineDownload />
                <p className="ml-2">저장</p>
              </div>
            </button>
            <button className="hover:opacity-70 ease-in duration-100 rounded-full bg-white text-black font-semibold pt-1 pb-1 pl-4 pr-4 ml-3">
              <div className="flex items-center">
                <BsFlag />
                <p className="ml-2">신고</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl mb-3">{title}</h1>
      <p className="line-clamp-2">{description}</p>
    </article>
  );
}
