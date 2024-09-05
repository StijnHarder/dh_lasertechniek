// import Image from "next/image";
// import Link from "next/link";

// export default async function PostList() {
//   const res = await fetch("https://harder.nl/wp-json/wp/v2/posts");
//   const posts = await res.json();
//   console.log(posts);

//   return (
//     <div className="px-20 mt-[50px] text-[#454A63]">
//       <div className="flex flex-col p-6 gap-10 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
//         <div className="flex flex-col gap-4">
//           <h1 className="text-4xl font-bold">
//             D&H Lasertechniek Blog ({posts.length})
//           </h1>
//           <p>Lees hier het laatste nieuws op het blog van D&H Lasertechniek!</p>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           {posts.map((post: any) => (
//             <div key={post.slug}>
//               <Link href={`/blog/${post.slug}`}>
//                 <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
//                   <Image
//                     src="/placeholder_background.jpg"
//                     alt={post.title.rendered}
//                     className="absolute rounded-md h-full w-full object-cover"
//                     width={500}
//                     height={500}
//                   />
//                 </div>
//               </Link>
//               <Link href={`/blog/${post.slug}`} className="post-content my-4">
//                 <h3 className="text-2xl pt-4 pb-2">{post.title.rendered}</h3>
//                 <p
//                   dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//                 ></p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./Loading";

type PostProps = {
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  content: string;
};

async function getPosts() {
  const query = `
  {
    posts(first: 5) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        slug
        title
        content
      }
    }
  }`;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT
    }?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  const { data } = await res.json();
  console.log(data.posts.nodes);
  return data.posts.nodes;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className="px-20 mt-[50px] text-[#454A63]">
      <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
        <h1 className="text-4xl font-bold">D&H Lasertechniek Blog</h1>
        <div className="flex gap-4">
          {posts.map((post: PostProps) => (
            <div key={post.slug}>
              <Suspense fallback={<Loading />}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                    <Image
                      src="/placeholder_background.jpg"
                      alt={post.title}
                      className="absolute rounded-md h-full w-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                </Link>
              </Suspense>
              <Link href={`/blog/${post.slug}`} className="post-content my-4">
                <h3 className="text-2xl pt-4 pb-2">{post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { getPosts } from "@/lib/server";

// export default function BlogOverview() {
//   // const posts = await getPosts();

//   const [posts, setPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getPosts()
//       .then((data) => {
//         if (data) {
//           setPosts(data);
//           console.log(data);
//         } else {
//           console.error("Failed to load posts");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="px-20 mt-[50px] text-[#454A63]">
//       {loading ? (
//         "Loading..."
//       ) : (
//         <>
//           <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
//             <h1 className="text-4xl font-bold">
//               D&H Lasertechniek Blog ({posts.length})
//             </h1>
//             <div className="flex gap-4">
//               {posts.map((post: any) => (
//                 <div key={post.slug}>
//                   <Link href={`/blog/${post.slug}`}>
//                     <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
//                       <Image
//                         src={post.featuredImage.node.sourceUrl}
//                         alt={post.title}
//                         className="absolute rounded-md h-full w-full object-cover"
//                         width={500}
//                         height={500}
//                       />
//                     </div>
//                   </Link>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="post-content my-4"
//                   >
//                     <h3 className="text-2xl pt-4 pb-2">{post.title}</h3>
//                     <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
