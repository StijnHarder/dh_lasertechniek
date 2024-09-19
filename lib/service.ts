import { fetchAPI } from "./base";

export async function getPosts(first=10) {
    const data = await fetchAPI(`query FetchPosts($first: Int = 10) {
  posts(first: $first) {
    nodes {
      content
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      slug
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

export async function getProjects(first=10) {
    const data = await fetchAPI(`query FetchProjects($first: Int = 10) {
  projecten(first: $first) {
    nodes {
      content
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      slug
      title
    }
  }
}`, { variables: 
    {
        first,
    },
});
  
  return data.projecten.nodes;
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

export async function getProjectBySLug(slug : string) {
    const project = await fetchAPI(`query NewQuery($slug: String! = "") {
  projectBy(slug: $slug) {
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
  return project.projectBy;
}