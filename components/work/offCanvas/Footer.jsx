// Styles
const footerOuterCtSt = "w-full fixed xs:bottom-[90px] xl:bottom-0"
const footerInnerCtSt = "flex items-center p-4"

const Footer = ({ projectId }) => (
    <div className={footerOuterCtSt}>
        <div className={footerInnerCtSt}>
            <span>Project #{projectId}</span>
        </div>
    </div>
)
export default Footer