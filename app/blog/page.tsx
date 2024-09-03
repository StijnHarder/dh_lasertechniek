'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/server";

export default function BlogOverview() {
  // const posts = await getPosts();

  const [posts, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPost(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <div className="px-20 mt-[50px] text-[#454A63]">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
            <div className="flex gap-4">
              {posts.map((post: any) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="absolute rounded-md h-full w-full object-cover"
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="post-content my-4"
                  >
                    <h3 className="text-2xl py-4">{post.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
