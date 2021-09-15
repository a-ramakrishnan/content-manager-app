import Link from "next/link";
import SingleResource from "./SingleResource";

const ResourceHighlight = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((item, index) => {
            return (
              <section key={item.id} className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <SingleResource item={item} />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
