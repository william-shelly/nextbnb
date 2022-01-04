import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
  return(
    <div className="container mx-auto">
      <Header />
      <main>
        {props.content}
      </main>
      <Footer />
    </div>
  )
}
