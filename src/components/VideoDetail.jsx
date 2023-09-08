import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import ChannelInfo from "./ChannelInfo";
import SearchHeader from "./SearchHeader";

export default function VideoDetail() {
  const {
    state: { video, target },
  } = useLocation();

  const [scrollParent, setScrollParent] = useState(undefined);
  const snippetType = video ? video.snippet : target.snippet;

  const { title, channelId, channelTitle, description } = snippetType;

  useEffect(() => {
    const element = document.querySelector("section");
    setScrollParent(element);
  }, []);

  return (
    <section className="relative flex-col lg:flex tablet:flex-col h-full overflow-y-auto">
      <SearchHeader />
      <div className="lg:flex">
        <div className="pl-5 pr-5 w-full">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute h-full"
              src={`https://www.youtube-nocookie.com/embed/${
                video ? video.id : target.id
              }`}
              title="video"
              width="100%"
              alt="video"
            />
          </div>
          <ChannelInfo
            id={channelId}
            title={title}
            channelTitle={channelTitle}
            description={description}
          />
        </div>
        <RelatedVideos
          element={scrollParent}
          videoId={video ? video.id : target.id}
        />
      </div>
    </section>
  );
}
