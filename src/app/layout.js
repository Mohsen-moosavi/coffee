import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'

export const metadata = {
  title: 'Coffee chee',
  description: 'coffee chee project',
  icons: {
    icon: 'https://s8.uupload.ir/files/coffee-cup_oc1.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body dir='rtl'>{children}</body>
    </html>
  )
}
