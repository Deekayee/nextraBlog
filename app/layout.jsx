import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-blog/style.css';

export const metadata = {
  title: 'Nextra Blog',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search placeholder='Procurar no blog' />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            {new Date().getFullYear()} © Made with ❤️ and Nextra by{' '}
            <a href='https://github.com/Deekayee'>Deekayee</a>.
            <a href='/feed.xml' style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
