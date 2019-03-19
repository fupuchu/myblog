const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/blog-post.js");

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
            postTitle
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allContentfulPost.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: postTemplate,
        context: {
          slug: node.slug
        }
      });
    });
  });
};
