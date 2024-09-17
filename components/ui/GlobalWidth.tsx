export default function GlobalWidth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-5 md:px-10 lg:px-20">{children}</div>;
}
