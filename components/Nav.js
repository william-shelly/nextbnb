import Link from "next/link"

export default function Nav(props) {
  return (
    <nav className="container">
      <div className="flex justify-between">
        <ul className="inline-block">
          <li className="inline-block pr-6">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <ul className="inline-block">
          <li className="inline-block pr-6">
            <Link href="/register">
              <a>Sign Up</a>
            </Link>
          </li>
          <li className="inline-block pr-0">
            <Link href="/login">
              <a>Log In</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
