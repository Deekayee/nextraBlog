import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
 
export const metadata = {
  title: 'Blog Example'
}
 
export default async function RootLayout({ children }) {
  const banner = (
    <Banner storageKey="4.0-release">
      🎉 Nextra 4.0 is released.{' '}
      <a
        href="#"
        style={{
          textDecoration: 'underline',
          textUnderlinePosition: 'from-font'
        }}
      >
        Read more →
      </a>
    </Banner>
  )
 
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <body>
        <Layout banner={banner}>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>
 
          {children}
 
          <Footer>
            {new Date().getFullYear()} © Made with Love and Nextra by <a href="https://github.com/Deekayee">Deekayee</a>.
            <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
