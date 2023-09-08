import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MenuItem from "./MenuItem";
import { MenuToggleContext } from "../../context/MenuToggleContext";

import styles from "./Menu.module.css";

import { FaMusic } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdSportsSoccer, MdOutlineFeedback } from "react-icons/md";
import { BsYoutube, BsNewspaper, BsFlag } from "react-icons/bs";
import { IoMdClose, IoLogoGameControllerB } from "react-icons/io";

export default function Menu({ categoryId }) {
  const [active, setActive] = useState(1);
  const { toggle, menuToggle } = useContext(MenuToggleContext);

  const handleActiveToggle = (activeNumber) => {
    setActive(activeNumber);
  };

  const menuCategory = [
    { icon: <FaMusic />, name: "Music", number: [1, 10] },
    { icon: <MdSportsSoccer />, name: "Sports", number: [2, 17] },
    { icon: <IoLogoGameControllerB />, name: "Gaming", number: [3, 20] },
    { icon: <BsNewspaper />, name: "News & Politics", number: [4, 25] },
  ];

  const settingCategory = [
    { icon: <BsFlag />, name: "Report history", number: [5, 10] },
    { icon: <FiHelpCircle />, name: "Help", number: [6, 10] },
    { icon: <MdOutlineFeedback />, name: "Send Feedback", number: [7, 10] },
  ];

  return (
    <nav className={`${styles.nav} ${toggle && styles.active}`}>
      <div className="overflow-y-auto h-full">
        <div
          className="absolute
         right-2 top-9 text-xl cursor-pointer lg:hidden"
          onClick={() => menuToggle()}
        >
          {toggle && <IoMdClose />}
        </div>
        <div className="flex items-center justify-center h-40 text-5xl">
          <p className="mr-3 text-red-600">
            <BsYoutube />
          </p>
          <Link to="/">
            <h2 className="font-bold">HeoTube</h2>
          </Link>
        </div>

        <div>
          <h2 className="pl-5 font-semibold text-2xl h-[80px] leading-[80px] bg-[#0e0e11]">
            Menu
          </h2>
          <ul className="text-xl p-3">
            {menuCategory.map((item) => (
              <MenuItem
                icon={item.icon}
                categoryId={categoryId}
                active={active}
                activeNumber={handleActiveToggle}
                name={item.name}
                number={item.number}
              />
            ))}
          </ul>
          <div>
            <h2 className="pl-5 font-semibold text-2xl h-[80px] leading-[80px] bg-[#0e0e11]">
              Settings
            </h2>
            <ul className="text-xl p-3">
              {settingCategory.map((item) => (
                <MenuItem
                  icon={item.icon}
                  categoryId={categoryId}
                  active={active}
                  activeNumber={handleActiveToggle}
                  name={item.name}
                  number={item.number}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
