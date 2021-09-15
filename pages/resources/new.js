
import axios from 'axios'
import {useRouter} from "next/router";

import ResourceForm from "@/components/ResourceForm";


const ResourceCreate = () => {


    const router = useRouter()
    const createResource = (formData) => {

        console.log(formData)
        axios.post("/api/resources", formData)
            .then((res) => {
                alert(res?.data);
                router.push("/")
            })
            .catch((error) => alert(error?.response?.data))
    }


    return (
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <ResourceForm onFormSubmit={createResource}/>
                </div>
            </div>
        </div>
    )
}

export default ResourceCreate