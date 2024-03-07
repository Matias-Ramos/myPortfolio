// Styles
const containerStyle = "text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
const h2style = "h2 mb-0 xl:mt-12"

const Header = () => (
    <div className={containerStyle}>
        <h2 className={h2style}>
            My work <span className="text-accent">.</span>
        </h2>
    </div>
)

export default Header