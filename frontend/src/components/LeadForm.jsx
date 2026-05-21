import { useState } from "react"
import axios from "axios"
import API_URL from "../config"

function LeadForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: ""
  })

  const submitLead = async () => {

    try {

      await axios.post(
        `${API_URL}/lead`,
        formData
      )

      alert("Lead Submitted Successfully")

    } catch (error) {

      console.log(error)

      alert("Submission Failed")
    }
  }

  return (

    <div className="border p-6 rounded-xl shadow mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Lead Form
      </h2>

      <input
        type="text"
        placeholder="Name"
        className="border p-3 w-full rounded mb-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full rounded mb-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        className="border p-3 w-full rounded mb-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value
          })
        }
      />

      <textarea
        placeholder="Query"
        className="border p-3 w-full rounded mb-3"
        onChange={(e) =>
          setFormData({
            ...formData,
            query: e.target.value
          })
        }
      />

      <button
        onClick={submitLead}
        className="bg-black text-white px-5 py-2 rounded"
      >
        Submit
      </button>

    </div>
  )
}

export default LeadForm