import { Sidebar } from "@/components/navigation/sidebar";

export default function Documents({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-black h-auto min-h-full w-full absolute z-30 grid grid-cols-[22%_1fr]">
        <div className="h-full text-wrap"><Sidebar/></div>
        <div className="mx-5 font-inter">{children}</div>
      </div>
    </>
  );
}
