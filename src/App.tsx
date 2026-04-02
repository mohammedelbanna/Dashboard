import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  return (
    <Router>
      <div className="text-stone-950 bg-stone-100 grid gap-4 grid-cols-[200px_1fr] h-screen p-4">
        <Sidebar />
        <Dashboard />
      </div>
    </Router>
  )
}

export default App