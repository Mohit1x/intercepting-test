export default function DashBoardLayout({
  children,
  drawer,
}: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {drawer}
    </div>
  );
}
