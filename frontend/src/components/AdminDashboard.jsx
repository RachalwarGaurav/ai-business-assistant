import { useEffect, useState } from "react"
import axios from "axios"
import SERVER_URL from "../config"

function AdminDashboard() {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        `${SERVER_URL}/leads`
      )
      setLeads(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="border p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Admin Dashboard - Leads Management
          </h2>

          {leads.length === 0 ? (
            <p className="text-gray-600">No leads yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border p-3 text-left">Name</th>
                    <th className="border p-3 text-left">Email</th>
                    <th className="border p-3 text-left">Phone</th>
                    <th className="border p-3 text-left">Query</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-200">
                      <td className="border p-3">{lead.name}</td>
                      <td className="border p-3">{lead.email}</td>
                      <td className="border p-3">{lead.phone}</td>
                      <td className="border p-3">{lead.query}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6">
            <p className="text-gray-700">
              <strong>Total Leads:</strong> {leads.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
