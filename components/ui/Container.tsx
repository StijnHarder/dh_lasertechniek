export default function Container({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={`${id}`}
      className={`flex ${className} bg-white border-[1px] border-border_gray p-6 md:p-8 rounded-lg`}
    >
      {children}
    </div>
  );
}
