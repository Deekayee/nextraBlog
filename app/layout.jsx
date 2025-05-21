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
    <html lang='pt-PT' suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }}>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <a
              href='/'
              style={{
                textDecoration: 'none',
                fontWeight: 800,
                marginRight: 'auto',
                fontSize: '2rem',
                fontFamily: 'Vampiro One',
                marginBottom: 0,
              }}
            >
              Deekayee
            </a>
            <Search placeholder='Procurar...' />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            {new Date().getFullYear()} © Made with ❤️ and Nextra by{' '}
            <a
              style={{ fontFamily: 'Vampiro One' }}
              href='https://github.com/Deekayee'
            >
              Deekayee
            </a>
            .
            <a href='/feed.xml' style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
