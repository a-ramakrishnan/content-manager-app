import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const response = await fetch(`${process.env.SEV_URL}/resources`);
    const data = response.json();
    return res.send(data);
  }

  //Adding new resource
  if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Some data is missing");
    }

    try {
      const resData = await axios.post(
        `${process.env.SEV_URL}/resources`,
        req.body
      );
      return res.send(resData.data);
    } catch {
      return res.status(422).send("Unable to add data");
    }
  }

  //Editing an existing resource
  if (req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Some data is missing");
    }

    try {
      const resData = await axios.patch(
        `${process.env.SEV_URL}/resources/${id}`,
        req.body
      );
      return res.send(resData.data);
    } catch {
      return res.status(422).send("Unable to add data");
    }
  }
}
