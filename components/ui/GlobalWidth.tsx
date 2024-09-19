export default function GlobalWidth({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-5 md:px-10 lg:px-20 ${className}`}>{children}</div>
  );
}
