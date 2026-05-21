import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import UserDashboard from "./components/UserDashboard"
import AdminDashboard from "./components/AdminDashboard"
import UserLogin from "./components/UserLogin"
import AdminLogin from "./components/AdminLogin"

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user or admin is already logged in
    const userToken = localStorage.getItem("user_token")
    const adminToken = localStorage.getItem("admin_token")

    if (userToken) {
      setUserLoggedIn(true)
    }
    if (adminToken) {
      setAdminLoggedIn(true)
    }
    setLoading(false)
  }, [])

  const handleUserLogout = () => {
    localStorage.removeItem("user_token")
    localStorage.removeItem("username")
    localStorage.removeItem("role")
    setUserLoggedIn(false)
  }

  const handleAdminLogout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("role")
    setAdminLoggedIn(false)
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route
          path="/"
          element={
            userLoggedIn ? (
              <div className="min-h-screen bg-gray-100">
                <nav className="bg-blue-600 text-white p-4 shadow-lg">
                  <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">AI Business Assistant</h1>
                    <div className="flex gap-4 items-center">
                      <span>Welcome, {localStorage.getItem("username")}</span>
                      <Link
                        to="/admin"
                        className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded transition"
                      >
                        Admin Panel
                      </Link>
                      <button
                        onClick={handleUserLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </nav>
                <UserDashboard />
              </div>
            ) : (
              <UserLogin onLoginSuccess={() => setUserLoggedIn(true)} />
            )
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            adminLoggedIn ? (
              <div className="min-h-screen bg-gray-100">
                <nav className="bg-red-600 text-white p-4 shadow-lg">
                  <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <div className="flex gap-6">
                      <Link
                        to="/"
                        className="hover:bg-red-700 px-4 py-2 rounded transition"
                      >
                        User Dashboard
                      </Link>
                      <button
                        onClick={handleAdminLogout}
                        className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </nav>
                <AdminDashboard />
              </div>
            ) : (
              <AdminLogin onLoginSuccess={() => setAdminLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App