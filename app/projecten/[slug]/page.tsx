import GlobalWidth from "@/components/ui/GlobalWidth";
import { getProjectBySLug } from "@/lib/service";
import { getProjects } from "@/lib/service";
import Image from "next/image";

export async function generateStaticParams() {
  const projectSlugs = await getProjects();
  return projectSlugs.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySLug(params.slug);

  if (!project) return <div className="px-20">Project has not been found.</div>;

  return (
    <GlobalWidth className="mt-[50px] text-[#454A63]">
      <div className="flex flex-col bg-white border-[1px] border-border_gray rounded-lg">
        <div className="h-[300px] overflow-hidden rounded-t-lg">
          <Image
            className="w-full"
            src={
              project.featuredImage.node.sourceUrl ||
              "/placeholder_background.jpg"
            }
            width={500}
            height={500}
            alt={project.featuredImage.node.altText}
          />
        </div>
        <div className="flex flex-col p-8 gap-2">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p>{project.content.slice(3, -5)}</p>
        </div>
      </div>
    </GlobalWidth>
  );
}
