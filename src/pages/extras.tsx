import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"

const ExtrasPage: React.FC = () => (
  <Layout title="Extras">
    <Post>
      <div className="text-greenBlack font-bold transition-colors">
        <a
          className="hover:text-orangeRed "
          href="https://osu.ppy.sh/users/3388082"
        >
          My osu! Profile
        </a>
        <br></br>
        <a
          className="hover:text-orangeRed "
          href="https://www.youtube.com/channel/UCnk4ZvK_jaHbWJ5dtG91naQ"
        >
          My osu! YouTube channel
        </a>
        <br></br>
        <a
          className="hover:text-orangeRed "
          href="https://www.youtube.com/channel/kaihuangarrangements"
        >
          My piano YouTube channel
        </a>
        <br></br>
        <a
          className="hover:text-orangeRed "
          href="https://soundcloud.com/kaihuangarrangements"
        >
          My soundcloud
        </a>
        <br></br>
        <a
          className="hover:text-orangeRed "
          href="https://www.last.fm/user/thunderbird2678"
        >
          My last.fm
        </a>
      </div>
    </Post>
  </Layout>
)

export default ExtrasPage
