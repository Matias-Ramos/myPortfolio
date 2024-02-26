// Components
import ProjectsBtn from '../components/home/ProjectsBtn';
import Narrative from '../components/home/Narrative';
import Background from '../components/home/Background';
// Styles
const middleCtStyle = "w-full"
const innerCtStyle = "text-center flex flex-col justify-start xl:justify-center xl:pt-32 xl:text-left h-full container mx-auto"

const Home = () => (
  <div>
    <div className={middleCtStyle}>
      <div className={innerCtStyle}>

        <Narrative />
        <ProjectsBtn />

      </div>
    </div>

    <Background />

  </div>
);
export default Home;
