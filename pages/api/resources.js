import axios from 'axios'

export default async function resources(req, res) {
  if (req.method === 'GET') {
    const response = await fetch("http://localhost:3001/api/resources")
    const data = response.json()
    return res.send(data)
  }
  if (req.method === 'POST') {
    const {title, description, link, timeToFinish, priority} = req.body
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Some data is missing')
    }

    try {
      const resData = await axios.post('http://localhost:3001/api/resources', req.body)
      return res.send(resData.data)
    } catch {
      return res.status(422).send("Unable to add data")
    }


  }
}