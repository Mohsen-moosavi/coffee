import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import AOS from '@/components/modules/AOS/AOS';
import ScrollToTop from '@/components/modules/scrollToTop/ScrollToTop';

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
      <body dir='rtl'>
        <AOS/>
        <ScrollToTop/>
        {children}
        </body>
    </html>
  )
}
