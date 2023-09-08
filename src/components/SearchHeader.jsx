import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuToggleContext } from "../context/MenuToggleContext";
import { AiOutlineHome } from "react-icons/ai";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const { keyword, videoId } = useParams();
  const { toggle, menuToggle } = useContext(MenuToggleContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <header className="relative w-full mt-2 mb-2 flex items-center">
      <form onSubmit={handleSubmit} className="flex justify-end w-full mr-3">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search your Videos.."
          className="w-80 rounded-md outline-none text-black pl-2 pt-1 pr-2 pb-1"
        />
        <div
          onClick={handleSubmit}
          className="flex items-center pl-2 text-lg hover:cursor-pointer"
        >
          <BsSearch />
        </div>
      </form>
      {(keyword || videoId) && (
        <button
          className="absolute left-2 cursor-pointer text-2xl"
          onClick={() => navigate("/")}
        >
          <AiOutlineHome />
        </button>
      )}
      {!keyword && !videoId && (
        <div
          className="toggle:hidden absolute left-2 text-xl cursor-pointer z-[9999]"
          onClick={() => menuToggle()}
        >
          {!toggle && <GiHamburgerMenu />}
        </div>
      )}
    </header>
  );
}
