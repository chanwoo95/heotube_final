import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, element }) {
  const navigate = useNavigate();

  return (
    <li
      key={video.id}
      onClick={() => {
        navigate(`/detail/${video.id}`, { state: { video } });
        element && element.scrollTo(0, 0);
      }}
      className="relative w-full h-[150px] pt-2 pb-2 mobile_sm:h-[230px] tablet:h-[250px] cursor-pointer ease-out duration-300 hover:scale-105"
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnails"
        className="w-full h-full "
      />
      <h2 className="absolute w-full left-0 bottom-0 line-clamp-2 text-sm bg-[#00000080] backdrop-blur-[2px] pt-1 pl-2 pr-2">
        {video.snippet.title}
      </h2>
    </li>
  );
}
