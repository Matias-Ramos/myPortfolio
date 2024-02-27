// Components
import Circles from '../../components/Circles';
import Narrative from "../../components/about/narrative/Narrative";
import SkillsExp from "../../components/about/skillsExp/SkillsExp";
// Animation
// Styles
const containerStyle = "bg-primary/30 pt-4 text-center xl:text-left z-20"
const infoStyle = "xs:w-5/6 mx-auto flex flex-col items-center xl:items-start xl:flex-row gap-x-10"

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
