// Tooltip Icon
import TooltipIcon from "../../TooltipIcon";

const ProjectDetails = (propertyName, data) => {
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
export default ProjectDetails;