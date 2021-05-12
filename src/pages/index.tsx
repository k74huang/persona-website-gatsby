import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"

const IndexPage: React.FC = () => (
  <Layout title="Hey!">
    <Post>
      <div className="text-grey text-justify">
        Welcome to my site! I'm a Computer Engineering student at the University
        of Waterloo that's currently focused on frontend and fullstack web
        development but have an endless slew of interests beyond that.
        <br></br>
        <br></br>
        Previously, I've worked at companies such as <b>Draper AI</b> (now a
        part of <b>Perpetua Labs</b>) as a frontend engineer where I helped
        launch the our new Amazon Sponsored Brands feature,{" "}
        <b>Ultimate Software</b>, managing performance testing for our SaaS
        product's API's, and at <b>NVIDIA</b>, where I tested video games
        including the SHIELD release of MarioKart Wii (bet you didn't know that
        existed). The tech used in the workplace doesn't matter as much to me as
        the product I'm working on. If I'm given the chance to make meaningful
        contributions to shit I care about, I'll pick up the tech required for
        it quickly.
        <br></br>
        <br></br>
        Outside of software development, I have a multitude of other interests
        that I occupy myself with. Currently, I play keytar and sing for{" "}
        <b>UWaterloo's Animusic Ensembles</b> and write music for the Touhou
        Circle <b>Platagenia</b>. I also run <b>osu!UWaterloo</b>, our local
        community for the rhythm game osu! and am heavily involved in organizing
        events in the broader Canadian community as a whole. I also stream osu!
        alongside other games as an <b>affiliated Twitch livestreamer</b>.
        <br></br>
        <br></br>
        If you're interested in reaching out to me, you can do so through email
        (for professional communications), or Discord (for not quite so
        professional communications). Both of these are on the sidebar!
      </div>
    </Post>
  </Layout>
)

export default IndexPage
