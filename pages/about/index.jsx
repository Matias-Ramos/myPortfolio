// Components
import Circles from '../../components/Circles';
import Narrative from "../../components/about/narrative/Narrative";
import SkillsExp from "../../components/about/skillsExp/SkillsExp";
// Animation
// Styles
const sectionStyle = "py-4 text-center xl:text-left "
const infoStyle = "w-5/6 mx-auto flex flex-col items-center xl:items-start xl:flex-row gap-x-10 max-xl:mb-5 xl:grid xl:grid-cols-2"

const About = () => (
  <section className={sectionStyle}>
    <Circles />
    <div className={infoStyle}>
      <Narrative />
      <SkillsExp />
    </div>
  </section>
)

export default About;
