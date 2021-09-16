import ResourceForm from "@/components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceEdit = ({ resource }) => {
  const router = useRouter();
  const handleEdit = (formData) => {
    //alert(JSON.stringify(formData));
    axios
      .patch("/api/resources", formData)
      .then(() => router.push(`/resources/${resource.id}`))
      .catch((error) => alert(error?.response?.data));
  };

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1>Edit Resource {resource.title}</h1>
            <ResourceForm initialData={resource} onFormSubmit={handleEdit} />
          </div>
        </div>
      </div>
    </>
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

export default ResourceEdit;
