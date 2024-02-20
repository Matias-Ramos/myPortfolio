// Styles
import classNames from 'classnames';
const containerStyle = "flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 relative z-20 "

const Buttons = ({index, setIndex, aboutData}) => {

    const getBtnClasses = (itemIndex) => {
        return classNames(
          "cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0",
          {
            "text-accent after:w-[100%] after:bg-accenter after:transition-all after:duration-300" 
            : index === itemIndex
          });
      };

    return (
        <div className={containerStyle}>
            {aboutData.map((item, itemIndex) => (
                <div
                    key={itemIndex}
                    className={ getBtnClasses(itemIndex) }
                    onClick={() => setIndex(itemIndex)}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )
}
export default Buttons