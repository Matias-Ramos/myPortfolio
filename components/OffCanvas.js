"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const OffCanvas = ({isOpen, setIsOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);

    const sideList = [
        {
            title: "item 1",
        },
        {
            title: "item 2",
        },
        {
            title: "item 3",
        },
        {
            title: "item 4",
        },
    ];

    // const handleDrawer = () => {
    //     setIsOpen(!isOpen);
    // };

    useEffect(() => {
        const handleEscKeyPress = (e) => {
            if (e.keyCode === 27 && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.setProperty("overflow", "hidden");
        } else {
            document.body.style.removeProperty("overflow");
        }

        document.addEventListener("keydown", handleEscKeyPress);

        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isOpen]);

    return (
        <nav className="flex  items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-30">


            {/* Triggering button */}
            {/* <div className="flex items-center">
                <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
                    <GiHamburgerMenu className="text-3xl" />
                </button>
            </div> */}


            {/* Back layer, with less opacity */}
            {isOpen && (
                <div className="z-20 fixed inset-0 transition-opacity ">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black opacity-50"
                        tabIndex="0"
                    ></div>
                </div>
            )}


            {/* OffCanvas */}
            <aside
                className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Header */}
                <div className="flex w-full justify-center p-4 border-b">
                    <span className="h-auto">
                        www.projectDomain.com
                    </span>
                </div>

                {/* Body */}
                {sideList.map(({ title }, index) => {
                    return (
                        <span
                            key={index}
                            className="flex items-center p-4"
                        >
                            <span>{title}</span>
                        </span>
                    );
                })}

                {/* Footer */}
                <div className="fixed bottom-0 w-full">
                    <div className="flex items-center p-4">
                        <span>Project #3</span>
                    </div>
                </div>
            </aside>
        </nav>
    );
};

export default OffCanvas;