import { useState } from "react"
import axios from "axios"
import SERVER_URL from "../config"

function UserLogin({ onLoginSuccess }) {
  const [tab, setTab] = useState("login") // "login", "signup", "admin"
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (tab === "signup") {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match")
          setLoading(false)
          return
        }

        const res = await axios.post(`${SERVER_URL}/auth/signup`, {
          username: formData.username,
          email: formData.email,
          password: formData.password
        })

        if (res.data.success) {
          localStorage.setItem("user_token", res.data.token)
          localStorage.setItem("username", formData.username)
          localStorage.setItem("role", "user")
          onLoginSuccess()
        } else {
          setError(res.data.message)
        }
      } else {
        const res = await axios.post(`${SERVER_URL}/auth/user-login`, {
          username: formData.username,
          password: formData.password
        })

        if (res.data.success) {
          localStorage.setItem("user_token", res.data.token)
          localStorage.setItem("username", res.data.username)
          localStorage.setItem("role", "user")
          onLoginSuccess()
        } else {
          setError(res.data.message)
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAdminSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(`${SERVER_URL}/auth/admin-login`, {
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

  const switchTab = (newTab) => {
    setTab(newTab)
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
    setError("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          AI Assistant
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b">
          <button
            onClick={() => switchTab("login")}
            className={`flex-1 py-2 font-bold border-b-2 transition ${
              tab === "login"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchTab("signup")}
            className={`flex-1 py-2 font-bold border-b-2 transition ${
              tab === "signup"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => switchTab("admin")}
            className={`flex-1 py-2 font-bold border-b-2 transition ${
              tab === "admin"
                ? "border-red-600 text-red-600"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            Admin
          </button>
        </div>

        {/* User Login Tab */}
        {tab === "login" && (
          <form onSubmit={handleUserSubmit} className="space-y-4">
            <p className="text-center text-gray-600 mb-4">Welcome back</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Please wait..." : "Login"}
            </button>
          </form>
        )}

        {/* User Signup Tab */}
        {tab === "signup" && (
          <form onSubmit={handleUserSubmit} className="space-y-4">
            <p className="text-center text-gray-600 mb-4">Create your account</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </form>
        )}

        {/* Admin Login Tab */}
        {tab === "admin" && (
          <form onSubmit={handleAdminSubmit} className="space-y-4">
            <p className="text-center text-gray-600 mb-4">Admin Access Only</p>
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
        )}
      </div>
    </div>
  )
}

export default UserLogin
