/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.css"
import Sidebar from "./sidebar"

const Layout = (props: { children; title: string }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-lightBrown h-full w-full">
      <Sidebar>
        <div className="m-12">
          <div className=" text-darkBrown font-serif font-bold text-5xl mb-6">
            {props.title}
          </div>
          {props.children}
        </div>
      </Sidebar>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
