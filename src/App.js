import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeProvider } from "./context/YoutubeApiContext";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import { MenuToggleProvider } from "./context/MenuToggleContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex w-full h-full">
      <YoutubeProvider>
        <MenuToggleProvider>
          <div className="w-full h-full overflow-hidden">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </MenuToggleProvider>
      </YoutubeProvider>
    </div>
  );
}
