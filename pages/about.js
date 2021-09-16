import Link from "next/link";

function AboutPage({ data }) {
  return (
    <>
      <h1>In the about page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h4>(c) Copyright 2021</h4>
    </>
  );
}

export default AboutPage;
