import Link from "next/link";
import moment from "moment";

const SingleResource = ({ item }) => {
  return (
    <>
      <div className="content is-medium">
        <h2 className="subtitle is-4">
          {moment(item.createdAt).format("LLL")}
          <span className={`tag is-large ml-4 resource-${item.status}`}>
            {item.status}
          </span>
        </h2>
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
