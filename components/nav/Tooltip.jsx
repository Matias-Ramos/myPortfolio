const tooltipTriangleStyling = `
  border-solid
  border-l-white
  border-l-8
  border-y-transparent
  border-y-[6px]
  border-r-0
  absolute
  -right-2`;
const tooltipOuterCtStyling = `
  absolute
  pr-14
  right-0
  hidden
  xl:group-hover:flex`;
const tooltipMiddleCtStyling = `
  bg-white
  relative
  flex
  text-primary
  items-center
  p-[6px]
  rounded-[3px]`;
const tooltipInnerCtStyling = `
  text-[12px]
  leading-none
  font-semibold
  capitalize`;

const Tooltip = ({link}) => (
    <div className={tooltipOuterCtStyling}>
        <div className={tooltipMiddleCtStyling}>
            <div className={tooltipInnerCtStyling}>
                {link.name}
            </div>
            {/* triangle */}
            <div className={tooltipTriangleStyling}></div>
        </div>
    </div>
)
export default Tooltip