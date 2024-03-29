// Components
import ProjectsBtn from '../components/home/ProjectsBtn';
import Narrative from '../components/home/Narrative';
import Background from '../components/home/Background';
// Styles
const sectionStyle = "xl:h-full text-center xl:text-left flex flex-col justify-start xl:justify-end mx-5 xl:container xl:mx-auto pb-8 sm:pt-12 md:pt-16 xl:pt-0"

const Home = () => (
  <>
      <section className={sectionStyle}>
        <Narrative />
        <ProjectsBtn />
      </section>

    <Background />

  </>
);
export default Home;
