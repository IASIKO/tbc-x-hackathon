import SideBar from "@/components/Layout/SideBar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <main className="ml-[300px]">{children}</main>
    </>
  );
}
