// "use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPosts() {
  const query = ` {
        posts {
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
      }`;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT
    }?query=${encodeURIComponent(query)}`
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function page() {
  const posts = await getPosts();

  //   const [posts, setposts] = useState<any>(null);
  //   const [isLoading, setLoading] = useState(true);

  //   useEffect(() => {
  //     getPosts().then((posts) => {
  //       setposts(posts);
  //       setLoading(false);
  //       console.log(posts);
  //     });
  //   }, []);

  //   if (isLoading) return <div className="px-20">Loading...</div>;
  if (!posts) return <div className="px-20">No posts found</div>;

  return (
    <div className="px-20">
      {posts.map((post: any) => (
        <div key={post.slug} className="flex gap-4">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
            {post.excerpt}
            <Image
              src={
                post.featuredImage?.node?.sourceUrl ||
                "/placeholder_background.jpg"
              }
              width={100}
              height={100}
              alt="test"
            />
            {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
