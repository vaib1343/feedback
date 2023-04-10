import '@/shared/styles/globalStyles.css';

export const metadata = {
  title: 'Create Feedback',
  description: 'dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#F7F8FD', paddingBlock: '6.8rem' }}>{children}</div>
  )
}
