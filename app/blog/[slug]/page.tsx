import GlobalWidth from "@/components/ui/GlobalWidth";
import { getPostBySLug } from "@/lib/service";
import { getPosts } from "@/lib/service";
import Image from "next/image";

export async function generateStaticParams() {
  const postSlugs = await getPosts();
  return postSlugs.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySLug(params.slug);

  if (!post) return <div className="px-20">Post has not been found.</div>;

  return (
    <GlobalWidth className="mt-[50px] text-[#454A63]">
      <div className="flex flex-col bg-white border-[1px] border-border_gray rounded-lg">
        <div className="h-[300px] overflow-hidden rounded-t-lg">
          <Image
            className="w-full"
            src={post.featuredImage || "/placeholder_background.jpg"}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="flex flex-col p-8 gap-2">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p>{post.content.slice(4, -5)}</p>
        </div>
      </div>
    </GlobalWidth>
  );
}
