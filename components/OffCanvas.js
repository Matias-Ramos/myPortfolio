"use client";
import { useEffect } from "react";
// Tooltip Icon
import TooltipIcon from "./TooltipIcon";


const renderProjectDetails = (propertyName, data) => {
    if (!data) {
      return null; // Return early if data is empty or undefined
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

        <nav className="flex items-center justify-between px-6 h-16 text-white z-30">

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
                className={`transform top-0 left-0 w-64 bg-tertiary fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex w-full justify-center p-4 border-b">
                    <span className="h-auto">
                        {project.title}
                    </span>
                </div>

                {/* Body */}
                <div className="p-4">
                    {/* Use renderProjectDetails function for each property */}
                    {renderProjectDetails("Frontend", project.frontend)}
                    {renderProjectDetails("Backend", project.backend)}
                    {renderProjectDetails("Database", project.database)}
                    {renderProjectDetails("Hosting", project.hosting)}
                </div>
                <div className="p-4">
                    
                    {/* {project.frontend &&
                        <div className="mb-4">
                            <span> Frontend: </span>
                            <div className="flex flex-row gap-x-3 my-1">
                                {project.frontend.map((language, index) => (
                                    <TooltipIcon language={language} key={index}/>
                                ))}
                            </div>
                        </div>
                    }
                    {project.backend &&
                        <div className="mb-4">
                            <span> Backend: </span>
                            <div className="flex flex-row gap-x-3 my-1">
                                {project.backend.map((language, index) => (
                                    <TooltipIcon language={language} key={index}/>
                                ))}
                            </div>
                        </div>
                    }
                    {project.database &&
                        <div className="mb-4">
                            <span> Database: </span>
                            <div className="flex flex-row gap-x-3 my-1">
                                {project.database.map((language, index) => (
                                    <TooltipIcon language={language} key={index}/>
                                ))}
                            </div>
                        </div>
                    }
                    {project.hosting &&
                        <div className="mb-4">
                            <span> Hosting: </span>
                            <div className="flex flex-row gap-x-3 my-1">
                                {project.hosting.map((language, index) => (
                                    <TooltipIcon language={language} key={index}/>
                                ))}
                            </div>
                        </div>
                    } */}
                </div>

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