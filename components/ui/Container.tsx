export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-6 border-b-[1px] border-[#E8E8E8] text-[#454A63]">
      {children}
    </div>
  );
}
