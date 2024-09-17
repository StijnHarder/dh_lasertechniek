import { getPostBySLug } from "@/lib/service";
import { getPosts } from "@/lib/service";

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
    <div className="px-20 mt-[50px] text-[#454A63]">
      <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </div>
    </div>
  );
}
