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
} from '../../components/icons/icons'

const projectList = {
  slides: [
    {
      // each projects array has capacity for 4 objects.
      projects: [
        {
          id: 6,
          title: "www.matiasramos.com",
          link: "https://matiasramos.com",
          img: '/thumb2.jpg',
          frontend: [next, javascript],
        },
        {
          id: 5,
          title: "www.fedesantos.com",
          link: "https://fedesantos.com",
          img: '/thumb1.jpg',
          frontend: [react, typescript],
        },
        {
          id: 4,
          title: "www.elevateherfitness.com",
          link: "https://elevateherfitness.com",
          img: '/thumb4.jpg',
          frontend: [react, javascript],
        },
        {
          id: 3,
          title: "www.delsurprops.com.ar",
          link: "https://delsurprops.com.ar",
          img: '/thumb3.jpg',
          frontend: [react, javascript],
          backend: [golang],
          database: [postgres],
          hosting: [linux, cloud],
        },
      ],
    },
    {
      projects: [
        {
          id: 2,
          title: "www.orautomotores.com.ar",
          link: "https://orautomotores.com.ar",
          img: '/thumb2.jpg',
          frontend: [react, javascript],
          database: [firebase],
        },
        {
          id: 1,
          title: "www.mjconstrucciones.ar",
          link: "https://mjconstrucciones.ar",
          img: '/thumb1.jpg',
          frontend: [html, css, javascript],
        },
      ],
    },
  ],
};
export default projectList;