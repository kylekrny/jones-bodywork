import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children, content }) {
  return (
    <>
        <Header navigation={content.header_navigation}/>
        <main>{children}</main>
        <Footer content={content.footer}/>
    </>
  )
}
