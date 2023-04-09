import '@/shared/styles/globalStyles.css';

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
    <html lang="en">
      <body style={{height: '100vh', width: '100vw', backgroundColor: '#F7F8FD'}}>{children}</body>
    </html>
  )
}
