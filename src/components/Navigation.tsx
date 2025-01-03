import Link from 'next/link';

const Navigation = () => (
    <nav>
        <ul className="flex justify-center">
            <Link href='/' className="mx-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/skills" className="mx-2">Skills</Link>
            <Link href="/projects" className="mx-2">Projects</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
        </ul>
    </nav>
)

export default Navigation;