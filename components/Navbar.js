import Link from 'next/link';

const Navbar = () =>
(
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
            <Link href="/"><a class="nav-link">Home</a></Link>
            </li>
            <li class="nav-item">
            <Link href="/about"><a class="nav-link">About</a></Link>
            </li>
        </ul>
        <span class="navbar-text">
            LOCATION DETECTOR
        </span>
        </nav>
    </div>
)

export default Navbar;