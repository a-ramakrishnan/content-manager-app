import axios from "axios";

const activeresource = async (req, res) => {
  const response = await axios.get("http://localhost:3001/api/activeresource");
  const data = await response.data;
  return res.send(data);
};

export default activeresource;
