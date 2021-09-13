import Link from 'next/link'
const API_URL = `http://localhost:3001`

function AboutPage({data}) {
    return (
        <>
            <h1>In the about page</h1>
            <Link href="/"><a>Home</a></Link>
            <h4>(c) Copyright 2021</h4>
        </>
    )
}



export default AboutPage