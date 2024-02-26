// Components
import ProjectsBtn from '../components/home/ProjectsBtn';
import Narrative from '../components/home/Narrative';
import Background from '../components/home/Background';
// Styles
const outerCtStyle = "bg-primary/60 h-full"
const middleCtStyle = "w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
const innerCtStyle = "text-center flex flex-col justify-start xl:justify-center xl:pt-32 xl:text-left h-full container mx-auto"

const Home = () => (
  <div className={outerCtStyle}>
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
