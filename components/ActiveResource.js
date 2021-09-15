import Link from "next/link";
import styles from "@/styles/ActiveResource.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 0,
};

const ActiveResource = () => {
  const [resource, setResource] = useState(DEFAULT_DATA);
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchActiveResource() {
      const resp = await axios.get("/api/activeresource");
      const resource = resp.data;

      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const current = moment(new Date());
      const activated = moment(resource.lastActivationTime);

      const elapsedTime = current.diff(activated, "seconds");
      //console.log("Elapsed Time is", elapsedTime);

      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;
      //console.log("Time to Finish", updatedTimeToFinish);
      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }
      setResource(resource);
    }

    fetchActiveResource()
      .then((_) => console.log("Retrieved active resource"))
      .catch((_) => alert("Unable to get current Active Resource"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={styles.activeResource}>
      <h1 className={styles.resourceName}>
        {resource.title ? resource.title : "Loading Resource.."}
      </h1>
      <div className={styles.timeWrapper}>
        <h2 className={styles.elapsedTime}>{seconds ? seconds : "0"} secs </h2>
      </div>
      <Link href={`/resources/${resource.id}`}>
        <a className="button">Go to Resource</a>
      </Link>
    </div>
  );
};

export default ActiveResource;
