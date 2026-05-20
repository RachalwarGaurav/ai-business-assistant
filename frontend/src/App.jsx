import Chatbot from "./components/Chatbot"
import LeadForm from "./components/LeadForm"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4 text-blue-600">
            AI-Powered Business Automation Assistant
          </h1>

          <p className="text-gray-700 text-lg">
            Intelligent chatbot, lead management,
            and automation system powered by AI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Chatbot />

          <LeadForm />

        </div>

        <div className="mt-8">

          <Dashboard />

        </div>

      </div>

    </div>
  )
}

export default App