import 'src/shared/styles/globalStyles.css';

export const metadata = {
  title: 'Feedback App',
  description: 'dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#F7F8FD' }}>{children}</div>
  )
}
