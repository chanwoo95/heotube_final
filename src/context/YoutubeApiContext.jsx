import { useContext } from "react";
import { createContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

const YoutubeContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeContext);
}
