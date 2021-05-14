import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Metadata from "../components/metadata"

function Project(props: {
  children
  name: string
  description: string
  githubLink?: string
  webLink?: string
}) {
  return (
    <div>
      <div className="flex mb-6 ">
        <div className="flex flex-grow text-greenBlack font-bold">
          {props.name}
          <div className="ml-2">
            |{" "}
            {props.githubLink && (
              <a href={props.githubLink}>
                <FontAwesomeIcon
                  className="cursor-pointer ml-2"
                  icon={faGithub}
                />
              </a>
            )}
            {props.webLink && (
              <a href={props.webLink}>
                <FontAwesomeIcon
                  className="cursor-pointer ml-2"
                  icon={faGlobeAmericas}
                />
              </a>
            )}
          </div>
        </div>
        <div className="text-grey italic">{props.description}</div>
      </div>
      <div className="ml-8">{props.children}</div>
    </div>
  )
}

const ProjectsPage: React.FC = () => (
  <Layout title="Projects">
    <Metadata title="Projects" />
    <div className="text-grey text-justify">
      <Post>
        <Project
          name="Personal Website"
          description="You're looking at it"
          githubLink="https://github.com/k74huang/persona-website-gatsby"
          webLink="http://kai-huang.com/"
        >
          • Designed features on Figma then implemented them with React and
          Tailwind CSS
          <br></br> • Utilizes Gatsby for optimized performance
        </Project>
      </Post>
      <Post>
        <Project
          name="Valkyrie"
          description="Modern image gallery hosted on Github Pages with local directory synchronization"
          githubLink="https://github.com/k74huang/valkyrie"
          webLink="https://k74huang.github.io/valkyrie/"
        >
          • Utilized the Intersection Observer API to enable lazy loading,
          allowing efficient use of bandwidth and increased performance
          <br></br> • Created Python scripts with WXPython to monitor local
          directories and send notifications to the Windows tray
          <br></br> • Designed modern and responsive website layout in Figma,
          then implemented it with Bootstrap and CSS
          <br></br> • Integrated with Github to automatically push changes and
          rebuild website when files are changed
        </Project>
      </Post>
      <Post>
        <Project
          name="Usami Renko"
          description="Discord bot providing functionality for osu! beatmap creators"
          githubLink="https://github.com/k74huang/usami-renko"
        >
          • Designed a bot to automatically parse messages on a Discord server
          for osu! beatmap editor timestamps and replaced them with clickable
          links that integrate with the game client
          <br></br>• Created initially as a response to requests from osu!
          beatmap creators on Twitter
          <br></br>• Improved bot throughout its lifespan based on feedback from
          users
        </Project>
      </Post>
      <Post>
        <Project
          name="osu!UWaterloo Website"
          description="University club website emulating the design and functionality of the video game osu!"
          githubLink="https://github.com/k74huang/osu-uwaterloo-site"
          webLink="http://osu.uwaterloo.ca/"
        >
          • Created a modular site framework with Vue allowing for convenient
          updates each term such as new members or events
          <br></br>• Designed cohesive club branding and UI elements from
          scratch in Adobe Photoshop
          <br></br>• Recreated all UI behaviour and feedback of the osu! in-game
          menu using only CSS transitions and animations
        </Project>
      </Post>
      <Post>
        <Project
          name="osu! Skin Utilities"
          description="Set of useful automation scripts for skin modification for the game osu!"
          githubLink="https://github.com/k74huang/osu-skin-utils"
        >
          • Created scripts written in AHK in order to easily swap elements
          between different in-game skins
        </Project>
      </Post>
      <Post>
        <Project
          name="Moriya Shrine"
          description="Intelligent Mood Lighting System"
          githubLink="https://github.com/k74huang/MoriyaShrine"
        >
          • Implemented image processing functionality in C++
          <br></br>• Built and troubleshooted a cross-compilation toolchain for
          the MIPS24K architecture on a Unix System
          <br></br>• Wrote shell scripts to automate hardware and software
          configuration
        </Project>
      </Post>
      <Post>
        <Project
          name="Lucifer"
          description="Arduino-Driven Single Pixel Camera"
          githubLink="https://github.com/k74huang/Lucifer"
        >
          • Designed hardware assembly consisting of stepper motors,
          controllers, and LED displays
          <br></br>• Programmed functionality using Arduino, Processing, and
          Java
          <br></br>• Optimized hardware and software throughout testing process,
          reducing image capture time from 2 hours to 15 minutes
          <br></br>• Demonstrated a capture of a 300x300px black and white image
          using a single photoresistor in a live presentation
        </Project>
      </Post>
      <Post>
        <Project
          name="Last Stand Defense"
          description="Java Tower Defense Game"
          githubLink="https://github.com/k74huang/LastStandDefence"
        >
          • Designed custom implementations of Java graphics classes to suit
          specific needs for visual components
          <br></br>• Optimized asset management within game directories with
          Python scripts
          <br></br>• Utilized object-oriented programming to structure hierarchy
          of game entities such as towers and mobs
        </Project>
      </Post>
    </div>
  </Layout>
)

export default ProjectsPage
