// Components
import Circles from '../../components/Circles';
import Narrative from "../../components/about/narrative/Narrative";
import SkillsExp from "../../components/about/skillsExp/SkillsExp";
// Animation
// Styles
const containerStyle = "h-full bg-primary/30 py-32 text-center xl:text-left z-20"
const infoStyle = "md:container xs:w-5/6 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"

const About = () => (
  <div className={containerStyle}>
    <Circles />
    <div className={infoStyle}>
      <Narrative />
      <SkillsExp />
    </div>
  </div>
)

export default About;
