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

const projectList = {
  // group each slide in 4
  slides: [
    {
      projects: [
        {
          title: "www.mjconstrucciones.ar",
          link: "https://mjconstrucciones.ar",
          img: '/thumb1.jpg',
          frontend: [<FaHtml5 />, <FaCss3 />, <FaJs />],
        },
        {
          title: "www.orautomotores.com.ar",
          link: "https://orautomotores.com.ar",
          img: '/thumb2.jpg',
          frontend: [<FaReact />, <FaJs />],
          database: [<SiFirebase />],
        },
        {
          title: "www.delsurprops.com.ar",
          link: "https://delsurprops.com.ar",
          img: '/thumb3.jpg',
          frontend: [<FaReact />, <FaJs />],
          backend: [<FaGolang />],
          database: [<SiPostgresql />],
          hosting: [<FaLinux />, <FaCloud />],
        },
        {
          title: "www.elevateherfitness.com",
          link: "https://elevateherfitness.com",
          img: '/thumb4.jpg',
          frontend: [<FaReact />, <FaJs />],
        },
      ]
    },
    {
      projects : [
        {
          title: "www.fedesantos.com",
          link: "https://fedesantos.com",
          img: '/thumb1.jpg',
          frontend: [<FaReact />, <SiTypescript />],
        },
        {
          title: "www.matiasramos.com",
          link: "https://matiasramos.com",
          img: '/thumb2.jpg',
          frontend: [<SiNextdotjs />, <FaJs />],
        },
      ]
    },
  ]
}

export default projectList;