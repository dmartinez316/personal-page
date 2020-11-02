const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
  {
    allProfessionalJson {
      edges {
        node {
          slug
        }
      }
    }
    allEducationJson {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)

  result.data.allEducationJson.edges.forEach(element => {
    const { node } = element
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/templates/education.js'),
      context: {
        slug: node.slug
      }
    })
  })

  result.data.allProfessionalJson.edges.forEach(element => {
    const { node } = element
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/templates/professional.js'),
      context: {
        slug: node.slug
      }
    })
  })
}