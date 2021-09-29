import Link from "next/dist/client/link";

const Layout = ({ children }) => {
    return (
        <div>
        <nav>
        <Link href="/">
              <a>Home</a>
          </Link>
          <Link href="/projects">
              <a>Projects</a>
          </Link>
        </nav>
            { children }
        </div>
    )
}

export default Layout;