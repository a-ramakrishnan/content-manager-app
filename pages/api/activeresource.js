import axios from "axios";

const activeresource = async (req, res) => {
  const response = await axios.get(`${process.env.SEV_URL}/activeresource`);
  const data = await response.data;
  return res.send(data);
};

export default activeresource;
