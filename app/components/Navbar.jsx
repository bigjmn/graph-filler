import Link from "next/link";

const Navbar = () => {

    return (
        <nav>
            <h1>ColorFill</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}
export default Navbar