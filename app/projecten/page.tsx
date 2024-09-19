import { getProjects } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";

export default async function PostList() {
  const projects = await getProjects();
  if (!projects) return <div className="px-20">No projects found</div>;

  return (
    <div className="px-20 mt-[50px] text-[#454A63]">
      <div className="flex flex-col p-6 gap-6 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-lg">
        <h1 className="text-4xl font-bold">D&H Lasertechniek Projecten</h1>
        <div className="flex gap-4">
          {projects.map((project: any) => (
            <div key={project.slug}>
              <Link href={`/projecten/${project.slug}`}>
                <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                  <Image
                    src={
                      project.featuredImage?.node?.sourceUrl ||
                      "/placeholder_background.jpg"
                    }
                    alt={project.title}
                    className="absolute rounded-md h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </Link>
              <Link href={`/blog/${project.slug}`} className="my-4">
                <div>
                  <h3 className="text-2xl pt-4 pb-2">{project.title}</h3>
                  <p>{project.excerpt.slice(3, -5)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
