export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = `query NewQuery($slug: String! = "") {
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
}`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}`, {
    body: JSON.stringify({ variables: { slug: params.slug }, query }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch POST: ${res.status}`);
  }

  const post = await res.json();

  if (!post) return <div className="px-20">Post has not been found.</div>;

  return (
    <div className="px-20 mt-[50px] text-[#454A63]">
      <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
        <h1 className="text-4xl font-bold">{post.data.postBy.title}</h1>
      </div>
    </div>
  );
}
