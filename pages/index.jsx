// Components
import ProjectsBtn from '../components/home/ProjectsBtn';
import Narrative from '../components/home/Narrative';
import Background from '../components/home/Background';
// Styles
const innerCtStyle = "h-full text-center xl:text-left flex flex-col justify-start xl:justify-center container mx-auto"

const Home = () => (
  <>
      <div className={innerCtStyle}>

        <Narrative />
        <ProjectsBtn />

      </div>

    <Background />

  </>
);
export default Home;
