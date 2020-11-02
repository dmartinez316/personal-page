import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default (props) => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            slug
            title
            description
          }
        }
      }
      allProfessionalJson {
        edges {
          node {
            slug
            title
            description
          }
        }
      }
    }
  `)

  return (
    <div className="max-w-4xl mx-auto p-0 mt-8">
      <nav className="flex justify-center">
        {
          data.allProfessionalJson.edges.map((element, index) => {
            const { node } = element
            return (
              <Link to={`/${node.slug}`} key={index} >
                <div style={{ height: "120px" }} className="mx-2 p-2 font-mono text-blue-900 flex-1 bg-white hover:bg-orange-200 shadow m-4 max-w-sm p-4">
                  <p className="font-bold ">{node.title}</p>
                  {node.description}
                </div>
              </Link>
            )
          })
        }
        {
          data.allEducationJson.edges.map((element, index) => {
            const { node } = element
            return (
              <Link to={`/${node.slug}`} key={index} >
                <div style={{ height: "120px" }} className="mx-2 p-2 font-mono text-blue-900 flex-1 bg-white hover:bg-orange-200 shadow m-4 max-w-sm p-4">
                  <p className="font-bold ">{node.title}</p>
                  {node.description}
                </div>
              </Link>
            )
          })
        }
      </nav>
    </div>
  )
}