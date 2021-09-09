import Link from 'next/link'
import NavBar from "@/components/Navbar";

function AboutPage() {
    return (
        <>

            <h1>I am in the About Page</h1>
            <Link href="/"><a>Home</a></Link>
            <h4>(c) Copyright 2021</h4>
        </>
    )
}

export default AboutPage