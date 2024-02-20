// icons
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
    { 
        name: "home", 
        path: "/", 
        icon: <HiHome /> 
    },
    { 
        name: "about",
        path: "/about",
        icon: <HiUser /> 
    },
    { 
        name: "work", 
        path: "/work", 
        icon: <HiRectangleGroup /> 
    },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];