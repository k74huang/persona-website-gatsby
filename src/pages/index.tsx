import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import Metadata from "../components/metadata"

const IndexPage: React.FC = () => (
  <Layout title="Hey!">
    <Metadata />
    <Post>
      <div className="text-grey text-justify">
        Welcome to my site! I'm a Computer Engineering student at the University
        of Waterloo that's currently focused on frontend and fullstack web
        development but have an endless slew of interests beyond that.
        <br></br>
        <br></br>
        Previously, I've worked at companies such as{" "}
        <b>
          <a href="https://draper.ai/">Draper AI</a>
        </b>{" "}
        (now a part of{" "}
        <b>
          <a href="https://perpetua.io/">Perpetua</a>
        </b>
        ) as a frontend engineer where I helped launch the our new Amazon
        Sponsored Brands feature,{" "}
        <b>
          <a href="https://www.ultimatesoftware.com/">Ultimate Software</a>
        </b>
        , managing performance testing for our SaaS product's API's, and at{" "}
        <b>
          <a href="https://www.nvidia.com/en-us/">NVIDIA</a>
        </b>
        , where I tested video games including the SHIELD release of MarioKart
        Wii (
        <a
          className="italic"
          href="https://www.thenerdmag.com/nvidia-lightspeed-studios-wii-nvidia-shield/"
        >
          bet you didn't know that existed
        </a>
        ). The tech used in the workplace doesn't matter as much to me as the
        product I'm working on. If I'm given the chance to make meaningful
        contributions to shit I care about, I'll pick up the tech required for
        it quickly.
        <br></br>
        <br></br>
        Outside of software development, I have a multitude of other interests
        that I occupy myself with. Currently, I play keytar and sing for{" "}
        <b>
          <a href="https://www.youtube.com/c/AnimusicEnsembles">
            UWaterloo's Animusic Ensembles
          </a>
        </b>{" "}
        and write music for the Touhou Circle{" "}
        <b>
          <a href="https://plantagenia.com/">Platagenia</a>
        </b>
        . I also run{" "}
        <b>
          <a href="http://osu.uwaterloo.ca/">osu!UWaterloo</a>
        </b>
        , our local community for the rhythm game osu! and am heavily involved
        in organizing events in the broader Canadian community as a whole. I
        also stream osu! alongside other games as an{" "}
        <b>
          <a href="https://www.twitch.tv/thunderbird2678">
            affiliated Twitch livestreamer
          </a>
        </b>
        .<br></br>
        <br></br>
        If you're interested in reaching out to me, you can do so through email
        (for professional communications), or Discord (for literally anything,
        just send a friend req and let me know who you are). Both of these are
        on the sidebar!
      </div>
    </Post>
  </Layout>
)

export default IndexPage
