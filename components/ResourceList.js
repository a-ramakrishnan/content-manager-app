import Link from "next/link";
import SingleResource from "./SingleResource";


const ResourceList = ({resources}) => {
    return(
        <section className="hero ">
            <div className="hero-body">
                <div className="container">
                    <section className="section">
                        <div className="columns is-multiline is-variable is-8">
                            {
                                resources.map((item) => {
                                    return(
                                        <div key={item.id} className="column is-5 is-offset-1 ">
                                            <SingleResource item={item}/>
                                        </div>
                                    )
                                })}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default ResourceList;