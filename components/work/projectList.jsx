import {
  html,
  css,
  javascript,
  react,
  firebase,
  golang,
  postgres,
  linux,
  cloud,
  typescript,
  next
} from '../icons/devIcons'

const projectList = {
  slides: [
    {
      // each projects array has capacity for 4 objects
      projects: [
        {
          id: 7,
          title: "www.matiasramos.dev",
          link: "https://matiasramos.dev",
          img: '/work/mrPortfolio.png',
          frontend: [next, javascript],
        },
        {
          id: 6,
          title: "www.santoscloser.com",
          link: "https://santoscloser.com",
          img: '/work/fsantosLanding.png',
          frontend: [react, typescript],
        },
        {
          id: 5,
          title: "www.santoscloser-cdv.com",
          link: "https://santoscloser-cdv.com",
          img: '/work/fsantosWebsite.png',
          frontend: [react, typescript],
        },
        {
          id: 4,
          title: "www.elevateherfitness.com",
          link: "https://elevateherfitness.com",
          img: '/work/elevateher.png',
          frontend: [react, javascript],
        },
      ],
    },
    {
      projects: [
        {
          id: 3,
          title: "www.delsurprops.com.ar",
          link: "https://delsurprops.com.ar",
          img: '/work/delsurprops.png',
          frontend: [react, javascript],
          backend: [golang],
          database: [postgres],
          hosting: [linux, cloud],
        },
        {
          id: 2,
          title: "www.orautomotores.com.ar",
          link: "https://orautomotores.com.ar",
          img: '/work/orautomotores.png',
          frontend: [react, javascript],
          database: [firebase],
        },
        {
          id: 1,
          title: "www.mjconstrucciones.ar",
          link: "https://mjconstrucciones.ar",
          img: '/work/mjconstrucciones.png',
          frontend: [html, css, javascript],
        },
      ],
    },
  ],
};
export default projectList;