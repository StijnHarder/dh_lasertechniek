import { fetchAPI } from "./base";

export async function getPosts(first=10) {
    const data = await fetchAPI(`
    {
    posts(first: 10) {
      nodes {
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        content
        slug
        excerpt
        title
      }
    }
  }`, { variables: 
    {
        first,
    },
});
  return data.posts.nodes;
}

export async function getPostBySLug(slug : string) {
    const post = await fetchAPI(`query NewQuery($slug: String! = "") {
  postBy(slug: $slug) {
    content
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    slug
    title
  }
}`, { variables: 
    {
        slug: slug,
    },
});
  return post.postBy;
}