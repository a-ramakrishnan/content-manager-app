import Link from "next/link";

const SingleResource = ({ item }) => {
  return (
    <>
      <div className="content is-medium">
        <h2 className="subtitle is-4">{item.createdAt}</h2>
        <h1 className="title">{item.title}</h1>
        <p>{item.description}</p>
        <p>Time to Finish: {item.timeToFinish} (mins)</p>
        <p>Status: {item.status}</p>
        <Link href={`/resources/${item.id}`}>
          <a className="button is-link">Learn More</a>
        </Link>
      </div>
    </>
  );
};

export default SingleResource;
