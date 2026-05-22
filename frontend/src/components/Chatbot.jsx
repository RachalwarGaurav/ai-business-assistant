import { useState } from "react"
import axios from "axios"
import SERVER_URL from "../config"

function Chatbot() {

  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {

    if (!message) {
      alert("Please enter a message")
      return
    }

    try {

      setLoading(true)

      const res = await axios.post(
        `${SERVER_URL}/chat`,
        {
          message
        }
      )

      setResponse(res.data.response)

    } catch (error) {

      console.log(error)

      setResponse("Error connecting backend")

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        AI Chatbot
      </h2>

      <p className="text-gray-600 mb-4">
        Ask business or course-related queries.
      </p>

      <input
        type="text"
        placeholder="Type your question..."
        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg mt-4 w-full transition"
      >
        Send Message
      </button>

      {
        loading && (
          <div className="mt-4 text-blue-500 font-semibold">
            Thinking...
          </div>
        )
      }

      {
        response && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">

            <h3 className="font-bold mb-2 text-gray-700">
              AI Response
            </h3>

            <p className="text-gray-800">
              {response}
            </p>

          </div>
        )
      }

    </div>
  )
}

export default Chatbot