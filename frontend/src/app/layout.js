import './global.css'
import ResponsiveAppBar from './appbar'

export const metadata = {
  title: 'Unofficial Transformers Fansite',
  description: 'Transformers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  )
}
