import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Slider from "./Slider/Slider";

export default function Content({ videos }) {
  const [target, setTarget] = useState();

  const navigate = useNavigate();

  useEffect(() => setTarget(videos && videos[0]), [videos]);

  const backgroundImage = {
    backgroundImage:
      (target &&
        target.snippet.thumbnails.maxres &&
        `url(${target.snippet.thumbnails.maxres.url})`) ||
      (target &&
        target.snippet.thumbnails.standard &&
        `url(${target.snippet.thumbnails.standard.url})`) ||
      (target &&
        target.snippet.thumbnails.high &&
        `url(${target.snippet.thumbnails.high.url})`),
  };

  return (
    <section className="relative w-full h-full overflow-x-hidden">
      <div className="absolute top-40 left-10 max-w-xl">
        <h1 className="text-4xl line-clamp-1 mb-3">
          {target && target.snippet.title}
        </h1>
        <p className="line-clamp-3">{target && target.snippet.description} </p>
        <button
          onClick={() =>
            navigate(`/detail/${target.id}`, { state: { target } })
          }
          className="p-5 mt-3 text-3xl rounded-lg bg-[#209dd8] hover:opacity-80"
        >
          <FaPlay />
        </button>
      </div>
      <div
        className="w-full h-full bg-cover bg-center bg-blend-darken bg-[#0005]"
        style={backgroundImage}
      >
        <div className="absolute left-0 bottom-10 w-full h-[200px] bg-blend-darken bg-[#0009]">
          <Slider videos={videos} setTarget={setTarget} />
        </div>
      </div>
    </section>
  );
}
