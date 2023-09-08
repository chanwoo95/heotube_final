import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ element }) {
  const { youtube } = useYoutubeApi();

  const { data: videos } = useQuery(["videos"], async () => youtube.search(), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="w-[400px] h-full tablet:w-full ">
      {videos && (
        <ul className="p-5 tablet:grid tablet:grid-cols-2 tablet:gap-4 mobile_md:grid-cols-2 mobile_sm:grid-cols-1 flex  flex-col items-center">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} element={element} />
          ))}
        </ul>
      )}
    </div>
  );
}
