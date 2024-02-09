// icons
import {
    FaCloud,
    FaCss3,
    FaHtml5,
    FaJs,
    FaLinux,
    FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import {
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
} from "react-icons/si";

const projectList = [
  {
    link: "https://mjconstrucciones.ar",
    frontend: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
  {
    link: "https://orautomotores.com.ar",
    frontend: [<FaReact />, <FaJs />],
    database: [<SiFirebase />],
  },
  {
    link: "https://delsurprops.com.ar",
    frontend: [<FaReact />, <FaJs />],
    backend: [<FaGolang />],
    database: [<SiPostgresql />],
    hosting: [<FaLinux />, <FaCloud />],
  },
  {
    link: "https://elevateherfitness.com",
    frontend: [<FaReact />, <FaJs />],
  },
  {
    link: "https://fedesantos.com",
    frontend: [<FaReact />, <SiTypescript />],
  },
  {
    link: "https://matiasramos.com",
    frontend: [<SiNextdotjs />, <FaJs />],
  },
];

export default projectList;