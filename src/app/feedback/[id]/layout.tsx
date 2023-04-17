import 'src/shared/styles/globalStyles.css';

export const metadata = {
  title: 'Feedback',
  description: 'dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100%', width: '100vw', backgroundColor: '#F7F8FD' }}>{children}</div>
  )
}
