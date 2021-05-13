import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faFile,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import "../styles/global.css"

function SidebarLink(props: { title: string; to: string; className?: string }) {
  const fullClassName =
    (props.className ? props.className : "") +
    " text-lg text-greenBlack hover:text-orangeRed transition-colors"
  return (
    <Link to={props.to} className={fullClassName}>
      {props.title}
    </Link>
  )
}

function SidebarIcon(props: { to: string; type: IconDefinition }) {
  return (
    <Link
      to={props.to}
      className="text-lg text-greenBlack hover:text-orangeRed transition-colors ml-2"
    >
      <FontAwesomeIcon icon={props.type} />
    </Link>
  )
}

function Sidebar({ children }) {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col font-sans w-1/4">
        <div className="flex font-bold justify-center flex-grow flex-col items-end mr-12">
          <div className="flex font-bold font-serif text-5xl text-right text-darkBrown">
            Kai <br></br>Huang
          </div>
          <div className="mt-4">
            <SidebarIcon to="/" type={faFile} />
            <SidebarIcon to="/" type={faGithub} />
            <SidebarIcon to="/" type={faLinkedin} />
            <SidebarIcon to="/" type={faEnvelope} />
          </div>
        </div>
        <div className="flex font-bold flex-col items-end mr-12 mb-12 ">
          <SidebarLink title="Home" to="/"></SidebarLink>
          <SidebarLink title="Experience" to="/experiences"></SidebarLink>
          <SidebarLink title="Projects" to="/projects"></SidebarLink>
          <SidebarLink
            className="mt-4"
            title="Extras"
            to="/extras"
          ></SidebarLink>
        </div>
      </div>
      <div
        style={{
          borderLeft: "10px solid #BD5B47",
          borderRight: "10px solid #5A2E2D",
        }}
      ></div>
      <div className="overflow-y-scroll mr-1 w-3/4">
        <div className=" max-w-5xl">{children}</div>
      </div>
    </div>
  )
}

export default Sidebar
