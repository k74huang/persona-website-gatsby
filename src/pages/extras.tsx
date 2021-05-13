import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import { Link } from "gatsby"

const ExtrasPage: React.FC = () => (
  <Layout title="Extras">
    <Post>
      <div className="text-greenBlack hover:text-orangeRed transition-colors">
        <Link to="https://osu.ppy.sh/users/3388082">My osu! Profile</Link>
      </div>
    </Post>
  </Layout>
)

export default ExtrasPage
