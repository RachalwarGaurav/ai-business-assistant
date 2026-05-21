import { useEffect, useState } from "react"
import axios from "axios"
import API_URL from "../config"

function Dashboard() {

  const [leads, setLeads] = useState([])

  useEffect(() => {

    fetchLeads()

  }, [])

  const fetchLeads = async () => {

    try {

      const res = await axios.get(
        `${API_URL}/leads`
      )

      setLeads(res.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div className="border p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Admin Dashboard
      </h2>

      {
        leads.map((lead) => (

          <div
            key={lead._id}
            className="border p-3 rounded mb-3"
          >
            <p><strong>Name:</strong> {lead.name}</p>

            <p><strong>Email:</strong> {lead.email}</p>

            <p><strong>Query:</strong> {lead.query}</p>
          </div>

        ))
      }

    </div>
  )
}

export default Dashboard