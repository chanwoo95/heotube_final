import { useEffect, useState } from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import Menu from "../Menu/Menu";
import Content from "./Content";
import { useQuery } from "@tanstack/react-query";
import SearchHeader from "../SearchHeader";

export default function Main() {
  const [categoryId, setCategoryId] = useState();

  const { youtube } = useYoutubeApi();

  const { data: categoryVideos } = useQuery(
    ["categoryVideos", categoryId],
    async () => youtube.categoryVideos(categoryId),
    { staleTime: 1000 * 60 * 5 }
  );

  useEffect(() => {
    setCategoryId(10);
  }, []);

  return (
    <section className="flex w-full h-full">
      <Menu categoryId={setCategoryId} />
      <div className="w-full">
        <SearchHeader />
        <div className="w-full h-full">
          <Content videos={categoryVideos} />
        </div>
      </div>
    </section>
  );
}
