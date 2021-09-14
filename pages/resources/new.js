import styles from '@/styles/new.module.css'
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from "next/router";


const DEFAULT_DATA = {
    title: "",
    description: "",
    link:"",
    priority: "2",
    timeToFinish: 0
}

const ResourceCreate = () => {

    const [form, setForm] = useState(DEFAULT_DATA)
    const router = useRouter()
    const handleSubmit = () => {

        console.log(form)
        axios.post("/api/resources", form)
            .then((res) => {
                alert(res?.data);
                setForm(DEFAULT_DATA);
                router.push("/")
            })
            .catch((error) => alert(error?.response?.data))
    }

    const handleCancel = () => {
        setForm(DEFAULT_DATA)
    }

    const handleChange = (e) => {
        const name = e.target.name
        setForm({
            ...form,
            [name]: e.target.value})
    }

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <div className={styles.newform}>
                        <h1 className="title">Create Resource</h1>
                        <form>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input name="title" value={form.title} onChange={handleChange} className="input" type="text" placeholder="Name of the Resource"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea name="description" onChange={handleChange} value={form.description} className="textarea" placeholder="Description of the Resource"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Link</label>
                                <div className="control">
                                    <input name="link" onChange={handleChange} value={form.link} className="input" type="text" placeholder="Link (Any useful web link for the resource)"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Priority</label>
                                <div className="control">
                                    <div className="select">
                                        <select name="priority" onChange={handleChange} value={form.priority}>
                                            <option>4 - Urgent</option>
                                            <option>3 - High</option>
                                            <option>2 - Moderate</option>
                                            <option>1 - Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Time to Finish</label>
                                <div className="control">
                                    <input name="timeToFinish" onChange={handleChange} value={form.timeToFinish} className="input" type="number" placeholder="Time needed to finish"/>
                                </div>
                                <p className="help">(time in minutes)</p>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceCreate