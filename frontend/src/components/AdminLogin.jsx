import { useState } from "react"
import axios from "axios"
import API_URL from "../config"

function AdminLogin({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(`${API_URL}/auth/admin-login`, {
        username: formData.username,
        password: formData.password
      })

      if (res.data.success) {
        localStorage.setItem("admin_token", res.data.token)
        localStorage.setItem("role", "admin")
        onLoginSuccess()
      } else {
        setError(res.data.message)
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-red-600">
          Admin Panel
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Restricted Access Only
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Admin Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Admin Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Contact your administrator for credentials</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
