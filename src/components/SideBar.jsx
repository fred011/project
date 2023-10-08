import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdLockReset, MdMessage } from "react-icons/md";
import { BiAnalyse, BiLogOut, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsFillClipboard2CheckFill, BsFillClipboard2DataFill, BsInfoCircleFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import './Sidebar.css'
import { IconName } from "react-icons/bs";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/about",
    name: "About",
    icon: <BsInfoCircleFill />,
  },
  {
    path: "/request",
    name: "Request",
    icon: <MdMessage />,
  },
 
  {
    path: "/experiments",
    name: "Experiments",
    icon: <BsFillClipboard2DataFill />,
    subRoutes: [
      {
        path: "/physics",
        name: "Physics ",
        icon: <BsFillClipboard2CheckFill />,
      },
      {
        path: "/chemistry",
        name: "Chemistry",
        icon: <BsFillClipboard2CheckFill />,
      },
      
    ],
  },
//   {
//     path: "/login",
//     name: "LogOut",
//     icon: <BsCartCheck />,
//   },
  {
    
      
        path: "/change",
        name: "Change Password ",
        icon: <MdLockReset />,
     
  },
  {
    path: "/login",
    name: "LogOut",
    icon: <BiLogOut />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {/* <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Hello There
                </motion.h1>
              )}
            </AnimatePresence> */}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;