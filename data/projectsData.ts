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
    href: 'https://wave-turbine-power-calculator.vercel.app',
  },
  {
    title: 'Vertical Wind Turbine Power Calculator',
    description: `This is a small Spring Boot web application for calculating the 
    power output of a vertical-axis wind turbine (VAWT).`,
    imgSrc: '/static/images/vawt.jpg',
    href: 'https://vawt-power-calculator.vercel.app',
  },
  {
    title: 'ADK-Powered Travel Planner',
    description: `The ADK-Powered Travel Planner is a multi-agent travel-planning application. A host service coordinates 
    specialist services for flights, stays, and activities, while a Streamlit UI provides the user-facing workflow.`,
    imgSrc: '/static/images/travel-planner.png',
    href: 'https://isfinal-vk4i5cbgrtxipeedfddpzh.streamlit.app/',
  },
  {
    title: 'Loan Calculator',
    description: `This is is a single-page loan and amortization calculator for both personal and business borrowing.
    It is built with Next.js, TypeScript and Tailwind, runs in Docker Compose locally, and deploys to Vercel with Neon 
    Postgres and Upstash Redis rate limiting.`,
    imgSrc: '/static/images/loan-calc.png',
    href : 'https://loan-calc-m3.vercel.app/',
  },
]

export default projectsData
