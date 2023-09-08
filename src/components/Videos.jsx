import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";
import SearchHeader from "./SearchHeader";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const { data: videos } = useQuery(
    ["videos", keyword],
    () => youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 }
  );

  return (
    <section className="w-full h-full overflow-x-hidden overflow-y-auto">
      <SearchHeader />
      <ul className="place-items-center grid gap-3 grid-cols-videos_6 desktop:grid-cols-videos_5 tablet:grid-cols-videos_4 mobile_md:grid-cols-videos_3 mobile_sm:grid-cols-videos_2    ">
        {videos &&
          videos.map((video) => <VideoCard id={video.id} video={video} />)}
      </ul>
    </section>
  );
}
