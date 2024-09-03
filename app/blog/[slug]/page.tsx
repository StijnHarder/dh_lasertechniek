import { getPostBySlug, getPosts } from "@/lib/server";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return [];  // Return an empty array if there are no posts
  }

  const postSlugs = posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));

  return postSlugs;
}

export default async function PostDetails({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug);

  return (
      <div className="px-20 mt-[50px] text-[#454A63]">
          <div className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg flex flex-col">
            <div className="h-[300px] overflow-hidden">
              <Image
                className="rounded-tl-md rounded-tr-md"
                src="/placeholder_background.jpg"
                height={100}
                width={1500}
                alt="tba"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">{post.title || "Not found"}</h1>
                <div key={post.uri || "Not found"}>
                  <p dangerouslySetInnerHTML={{ __html: post.content || "Not found" }}></p>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}
