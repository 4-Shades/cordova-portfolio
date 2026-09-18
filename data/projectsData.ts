interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Wave Turbine Power Calculator',
    description: `This application is a small ASP.NET Core MVC web app for estimating
    the power output of a wave turbine system.`,
    imgSrc: '/static/images/wave-energy-buoy-corpower-ocean.jpg',
    href: 'https://www.google.com',
  },
  // {
  //   title: 'Vertical Wind Turbine Power Calculator',
  //   description: `This is a small Spring Boot web application for calculating the 
  //   power output of a vertical-axis wind turbine (VAWT).`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
]

export default projectsData
