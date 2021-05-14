import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import Metadata from "../components/metadata"

const ExtrasPage: React.FC = () => (
  <Layout title="Extras">
    <Metadata title="Extras" />
    <Post>
      <div className="text-grey font-bold transition-colors">
        <a href="https://osu.ppy.sh/users/3388082">My osu! Profile</a>
        <br></br>
        <a href="https://www.youtube.com/channel/UCnk4ZvK_jaHbWJ5dtG91naQ">
          My osu! YouTube channel
        </a>
        <br></br>
        <a href="https://www.youtube.com/channel/kaihuangarrangements">
          My piano YouTube channel
        </a>
        <br></br>
        <a href="https://soundcloud.com/kaihuangarrangements">My soundcloud</a>
        <br></br>
        <a href="https://www.last.fm/user/thunderbird2678">My last.fm</a>
        <br></br>
        <a href="https://flickr.com/photos/157005786@N08/">My Flickr</a>
      </div>
    </Post>
  </Layout>
)

export default ExtrasPage
