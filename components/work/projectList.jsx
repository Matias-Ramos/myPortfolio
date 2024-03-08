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
          link: "https://www.matiasramos.dev",
          img: '/work/matiasramosPortfolio.png',
          frontend: [next, javascript],
        },
        {
          id: 6,
          title: "www.santoscloser.com",
          link: "https://www.santoscloser.com",
          img: '/work/fsantosLanding.png',
          frontend: [react, typescript],
        },
        {
          id: 5,
          title: "www.santoscloser-cdv.com",
          link: "https://www.santoscloser-cdv.com",
          img: '/work/fsantosWebsite.png',
          frontend: [react, typescript],
        },
        {
          id: 4,
          title: "www.elevateherfitness.com",
          link: "https://www.elevateherfitness.com",
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
          link: "https://www.delsurprops.com.ar",
          img: '/work/delsurprops.png',
          frontend: [react, javascript],
          backend: [golang],
          database: [postgres],
          hosting: [linux, cloud],
        },
        {
          id: 2,
          title: "www.orautomotores.com.ar",
          link: "https://www.orautomotores.com.ar",
          img: '/work/orautomotores.png',
          frontend: [react, javascript],
          database: [firebase],
        },
        {
          id: 1,
          title: "www.mjconstrucciones.ar",
          link: "https://www.mjconstrucciones.ar",
          img: '/work/mjconstrucciones.png',
          frontend: [html, css, javascript],
        },
      ],
    },
  ],
};
export default projectList;