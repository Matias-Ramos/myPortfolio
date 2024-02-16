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
      // set 4 project per "projects" array
      projects: [
        {
          title: "www.mjconstrucciones.ar",
          link: "https://mjconstrucciones.ar",
          img: '/thumb1.jpg',
          frontend: [html, css, javascript],
        },
        {
          title: "www.orautomotores.com.ar",
          link: "https://orautomotores.com.ar",
          img: '/thumb2.jpg',
          frontend: [react, javascript],
          database: [firebase],
        },
        {
          title: "www.delsurprops.com.ar",
          link: "https://delsurprops.com.ar",
          img: '/thumb3.jpg',
          frontend: [react, javascript],
          backend: [golang],
          database: [postgres],
          hosting: [linux, cloud],
        },
        {
          title: "www.elevateherfitness.com",
          link: "https://elevateherfitness.com",
          img: '/thumb4.jpg',
          frontend: [react, javascript],
        },
      ]
    },
    {
      projects: [
        {
          title: "www.fedesantos.com",
          link: "https://fedesantos.com",
          img: '/thumb1.jpg',
          frontend: [react, typescript],
        },
        {
          title: "www.matiasramos.com",
          link: "https://matiasramos.com",
          img: '/thumb2.jpg',
          frontend: [next, javascript],
        },
      ]
    },
  ]
}

export default projectList;