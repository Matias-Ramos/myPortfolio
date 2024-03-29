// Icon customization
import { IconContext } from "react-icons";
// Tooltip
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip"

const TooltipIcon = ({ language }) => (
    <TooltipProvider delayDuration={25}>
        <Tooltip>
            <TooltipTrigger>
                <IconContext.Provider value={{ size: "2rem", className: "cursor-default" }}>
                    {language.icon}
                </IconContext.Provider>
            </TooltipTrigger>
            <TooltipContent>
                <span>{language.name}</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)
export default TooltipIcon