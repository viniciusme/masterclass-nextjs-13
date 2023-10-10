export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className='bg-blue-500'>
        <ul>
          <li>Perfil</li>
          <li>Conta</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
