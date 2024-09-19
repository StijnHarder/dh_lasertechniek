export default function FlexContainer({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={`${id}`} className={`flex ${className}`}>
      {children}
    </div>
  );
}
