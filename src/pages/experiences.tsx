import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"

function Experience(props: {
  children
  company: string
  title: string
  dates: string
}) {
  return (
    <div>
      <div className="flex mb-6 ">
        <div className="flex flex-grow text-greenBlack font-bold">
          {props.company}
          <div className="italic ml-2"> | {props.title}</div>
        </div>
        <div className="text-grey italic">{props.dates}</div>
      </div>
      <div className="ml-8">{props.children}</div>
    </div>
  )
}

const ExperiencesPage: React.FC = () => (
  <Layout title="Experience">
    <div className="text-grey text-justify">
      <Post>
        <Experience
          company="Draper AI"
          title="Frontend Software Engineering Co-Op"
          dates="Jan - Apr 2021"
        >
          • Implemented Tailwind CSS to replace bloated SCSS stylesheets,
          optimizing project build times and standardizing designs<br></br>•
          Created framework for site-wide theming with React's Context API and
          hooks alongside Tailwind CSS in order to support dark mode<br></br>•
          Designed and implemented new unified GraphQL schemas for internal
          API’s allowing for new Amazon advertising features to be easily added
          <br></br>• Rewrote component library with functional components and
          Storybook support, greatly improving UI development workflow
        </Experience>
      </Post>
      <Post>
        <Experience
          company="hitplay"
          title="Front-end Web Developer"
          dates="May 2020 - Aug 2020"
        >
          • Improved load times for web application by 50% by restructuring
          states and props for React components and updating rendering logic
          <br></br>• Reworked SCSS build process through webpack configuration
          to ensure continuity of branding throughout product<br></br> •
          Refactored layout structure to use flexboxes and media queries,
          allowing for responsiveness across mobile and desktop devices<br></br>{" "}
          • Designed new features including a web-based logfile viewer in Adobe
          XD and implemented them with React and SCSS
        </Experience>
      </Post>
      <Post>
        <Experience
          company="hitplay"
          title="Automation Test Engineer"
          dates="Sep 2019 - Dec 2019"
        >
          • Maintained automated testing of front-end dashboard using
          Selenium-JS and chromedriver<br></br> • Integrated tests for backend
          AWS services including S3, Dynamo, and Lambda into workflow<br></br> •
          Wireframed responsive UI enhancements with Adobe XD which were then
          implemented with React and SCSS into existing codebase<br></br> •
          Coordinated testing and development as part of a small, agile team
        </Experience>
      </Post>
    </div>
  </Layout>
)

export default ExperiencesPage
