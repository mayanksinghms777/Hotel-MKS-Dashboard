import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Check-in / New Booking",
        path: "/about-us/Checkin",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Check-out / Bookings",
        path: "/about-us/Checkout",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Add Rooms",
        path: "/services/Addrooms",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Add Staffs",
        path: "/services/Addstaffs",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Add Vehicles",
        path: "/services/Addvehicles",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "moneyRegister",
    path: "/moneyRegister",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "History",
    path: "/Customers",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Login",
    path: "/Login",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];