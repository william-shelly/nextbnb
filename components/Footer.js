import Link from "next/link"
import Nav from "./Nav"

export default function Footer(props) {
  return (
    <footer className="nav-container">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="nextbnb" />
        </a>
      </Link>
      <Nav />
    </footer>
  )
}
