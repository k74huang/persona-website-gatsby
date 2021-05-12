import * as React from "react"

const Post = (props: { children }) => {
  return (
    <div className="flex flex-col">
      <div className="font-sans text-lg mb-6">{props.children}</div>
      <div className="flex flex-row justify-end">
        <div style={{ width: "50%", borderBottom: "5px solid #5A2E2D" }}></div>
      </div>
    </div>
  )
}

export default Post
