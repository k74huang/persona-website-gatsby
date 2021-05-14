import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import Metadata from "../components/metadata"

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
    <Metadata title="Experience" />
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
          dates="May - Aug 2020"
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
          dates="Sep - Dec 2019"
        >
          • Maintained automated testing of front-end dashboard using
          Selenium-JS and chromedriver<br></br> • Integrated testing of API
          endpoints of serverless AWS backend into Selenium scripts using the
          AWS Node.js SDK<br></br> • Wireframed responsive UI enhancements with
          Adobe XD which were then implemented with React and SCSS into existing
          codebase<br></br> • Coordinated testing and development as part of a
          small, agile team
        </Experience>
      </Post>
      <Post>
        <Experience
          company="Ultimate Software"
          title="Software Test Engineer"
          dates="Jan - April 2019"
        >
          • Wrote and maintained versioned C test scripts in HP Virtual User
          Generator<br></br>• Designed and set up performance testing scenarios
          in HP Performance Center for web applications under the PaaS model
          <br></br>• Created a MariaDB backup and restore API that integrated
          with existing company technologies as well as the company's Slack
          <br></br>• Managed Teamcity build configurations to optimize the
          efficiency of testing multiple issues in our overall workflow<br></br>
        </Experience>
      </Post>
      <Post>
        <Experience
          company="NVIDIA"
          title="Game Quality Assurance Tester"
          dates="May - Aug 2018"
        >
          • Tested and debugged work-in-progress titles at NVIDIA Lightspeed
          Studios <br></br>• Automated integration between programs used in test
          suite using Python and AHK, decreasing testing duration by 25%
          <br></br>• Updated internal programs using C# and WPF to improve data
          collection scope as well as QoL features including keyboard shortcuts
          <br></br>• Automated Linux workflows with various Bash and Python
          scripts
        </Experience>
      </Post>
      <Post>
        <Experience
          company="Metro Direction Financial Inc."
          title="Technology Consultant"
          dates="Jun 2013 - Aug 2017"
        >
          • Troubleshooted issues with hardware, software, and networking
          <br></br>• Advised employees on hardware purchases and QoL updates
          <br></br>• Designed and maintained the company website<br></br>
        </Experience>
      </Post>
      <Post>
        <Experience
          company="Ware Academy of Teacher"
          title="Assistant Teacher"
          dates="Sep 2014 - Aug 2016"
        >
          • Taught weekly workshops at Ware Academy of Music<br></br>• Focused
          on the Royal Conservatory of Music's Advanced Rudiments<br></br>•
          Experimented with a teaching style, treating students as equals, to
          great success<br></br>• Closely interacted between students and
          parents to ensure that understanding was achieved<br></br>•
          Successfully helped most students achieve examination marks of over
          95%<br></br>
        </Experience>
      </Post>
    </div>
  </Layout>
)

export default ExperiencesPage
