import Link from "next/link"

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/register">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
