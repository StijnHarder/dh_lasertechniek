import { getPosts } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";

export default async function PostList() {
  const posts = await getPosts();
  if (!posts) return <div className="px-20">No posts found</div>;

  return (
    <div className="px-20 mt-[50px] text-[#454A63]">
      <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
        <h1 className="text-4xl font-bold">D&H Lasertechniek Blog</h1>
        <div className="flex gap-4">
          {posts.map((post: any) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                  <Image
                    src={
                      post.featuredImage?.node?.sourceUrl ||
                      "/placeholder_background.jpg"
                    }
                    alt={post.title}
                    className="absolute rounded-md h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </Link>
              <Link href={`/blog/${post.slug}`} className="post-content my-4">
                <div>
                  <h3 className="text-2xl pt-4 pb-2">{post.title}</h3>
                  <p>{post.excerpt.slice(3, -5)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
