"use client";
// Hooks
import { useEffect } from "react";
// Tooltip Icon
import TooltipIcon from "./TooltipIcon";

// Sub-component
const renderProjectDetails = (propertyName, data) => {
    if (!data) {
        return null;
    }

    return (
        <div className="mb-4">
            <span>{propertyName}: </span>
            <div className="flex flex-row gap-x-3 my-1">
                {data.map((language, index) => (
                    <TooltipIcon language={language} key={index} />
                ))}
            </div>
        </div>
    );
};


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
    }, [isOpen]);

    return (
        <div className="flex items-center justify-between px-6 h-16 text-white z-30">

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
            <aside className={`transform top-0 left-0 w-64 bg-tertiary fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Header */}
                <div className="flex w-full justify-center p-4 border-b">
                        <a 
                            href={project.link}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="h-auto"
                        >
                            {project.title}
                        </a>
                </div>

                {/* Body */}
                <div className="p-4">
                    {renderProjectDetails("Frontend", project.frontend)}
                    {renderProjectDetails("Backend", project.backend)}
                    {renderProjectDetails("Database", project.database)}
                    {renderProjectDetails("Hosting", project.hosting)}
                </div>

                {/* Footer */}
                <div className="fixed bottom-0 w-full">
                    <div className="flex items-center p-4">
                        <span>Project #{project.id}</span>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default OffCanvas;