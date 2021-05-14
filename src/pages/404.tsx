import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Post from "../components/post"
import Metadata from "../components/metadata"

const IndexPage: React.FC = () => (
  <Layout title="This do be a bruh moment">
    <Metadata title="404" />
    <Post>
      <div className="text-grey text-justify">
        Seems like you found my 404 page. I'd appreciate it if you could toss me
        an email / DM me on Discord with how you got here so I can get that
        fixed!
      </div>
    </Post>
  </Layout>
)

export default IndexPage
