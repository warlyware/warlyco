import '../styles/globals.css';

export const metadata = {
  title: 'warly',
  description: 'warly - web3 developer',
}

export default function RootLayout({ children, overlay }) {
  return (
    <html lang="en">
      <body>
        {children}
        {overlay}
      </body>
    </html>
  )
}
