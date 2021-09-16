import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";

const ResourceDetails = ({ resource }) => {
  const router = useRouter();

  //Needed if we are using getStaticProps
  // if (router.isFallback){
  //     return <div>Loading.....</div>
  // }

  const activateResource = () => {
    //alert("Activating Resource");
    axios
      .patch(`/api/resources`, {
        ...resource,
        status: "active",
        activate: true,
      })
      .then(() => {
        console.log("Successfully changed on server. Reloading...");
        //alert("Resource activated. Redirecting...");
        router.reload();
      })
      .catch((_) => alert("Cannot activate resource"));
  };

  const deActivateResource = () => {
    //alert("De-Activating Resource");
    axios
      .patch(`/api/resources`, {
        ...resource,
        status: "inactive",
        deactivate: true,
      })
      .then(() => {
        alert("Resource Deactivated. Redirecting...");
        router.reload(`/`);
      })
      .catch((_) => alert("Cannot deactivate resource"));
  };

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  {/*<p>Page ID is {resource.id}</p>*/}
                  <h2 className="subtitle is-4">
                    {moment(resource.createdAt).format("LLL")}
                    <span
                      className={`tag is-large ml-4 resource-${resource.status}`}
                    >
                      {resource.status}
                    </span>
                  </h2>
                  <h1 className="title">{resource.title}</h1>
                  <p>{resource.description}</p>
                  <p>Time to Finish: {resource.timeToFinish} (mins)</p>

                  <div className="field is-grouped mr-2">
                    <div className="control">
                      {resource.status === "completed" ? (
                        <button type="button" className="button is-success">
                          Completed
                        </button>
                      ) : resource.status === "inactive" ? (
                        <button
                          type="button"
                          onClick={activateResource}
                          className="button is-link"
                        >
                          Activate
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={deActivateResource}
                          className="button is-link"
                        >
                          De-Activate
                        </button>
                      )}
                    </div>

                    <div className="control">
                      <Link href={`/resources/${resource.id}/edit`}>
                        <a className="button is-warning">Update</a>
                      </Link>
                    </div>

                    <div className="control">
                      <Link href={`/`}>
                        <a className="button">Go to Home</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.SEV_URL}/resources/${params.id}`, {
    method: "GET",
  });
  const data = await resData.json();
  console.log(resData);

  return {
    props: {
      resource: data,
    },
  };
}
//
// export async function getStaticProps({params}) {
//     const resData = await fetch(`${process.env.SEV_URL}/api/resources/${params.id}`, {
//         method: "GET"
//     })
//     const data = await resData.json()
//     console.log(resData)
//
//     return {
//         props: {
//             resource: data,
//         },
//         revalidate: 5 //time in secs
//     }
// }
//
// export async function getStaticPaths() {
//     const resData = await fetch(`${process.env.SEV_URL}/resources`)
//     const data = await resData.json()
//     const paths = data.map((item) => {
//         return {
//             params: {id: item.id}
//         }
//     })
//     return {
//         paths: paths,
//         fallback: true
//     }
// }

// ResourceDetails.getInitialProps = async ({query}) => {
//         const resData = await fetch(`${process.env.SEV_URL}/resources/${query.id}`, {
//         method: "GET"
//     })
//     const data = await resData.json()
//     console.log(resData)
//
//     return {
//
//             resource: data
//
//     }
// }

export default ResourceDetails;
