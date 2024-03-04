"use client";

// Hooks
import { useEffect } from "react";
// Components
import ProjectDetails from "./ProjectDetails";
import Header from "./Header";
import Footer from "./Footer";
// Styles
import classNames from "classnames";
const containerStyle = "flex items-center justify-between text-white z-40";
const bckgOuterCtSt = "z-60 fixed inset-0 transition-opacity";
const bckgInnerCtSt = "absolute inset-0 bg-black opacity-50"

const OffCanvas = ({ isOpen, setIsOpen, projectDetail: project }) => {

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
    }, [setIsOpen, isOpen]);

    const getAsideClasses = (isOpen) => {
        return classNames(
            "transform top-0 left-0 w-64 bg-tertiary fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ",
            {"translate-x-0": isOpen},
            {"-translate-x-full": !isOpen}
        );
    };

    return (
        <div className={containerStyle}>

            {/* Back layer, with less opacity */}
            {isOpen && (
                <div className={bckgOuterCtSt}>
                    <div
                        onClick={() => setIsOpen(false)}
                        className={bckgInnerCtSt}
                        tabIndex="0"
                    ></div>
                </div>
            )}

            {/* OffCanvas */}
            <aside className={getAsideClasses(isOpen)}>

                <Header project={project} />

                {/* Body */}
                <div className="p-4">
                    {ProjectDetails("Frontend", project.frontend)}
                    {ProjectDetails("Backend", project.backend)}
                    {ProjectDetails("Database", project.database)}
                    {ProjectDetails("Hosting", project.hosting)}
                </div>

                <Footer projectId={project.id} />

            </aside>
        </div>
    );
};

export default OffCanvas;