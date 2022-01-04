import Link from "next/link"
import Nav from "./Nav"

export default function Header(props) {
  return (
    <div className="nav-container">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="nextbnb" />
        </a>
      </Link>
      <Nav />
    </div>
  )
}
