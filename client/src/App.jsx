import { BrowserRouter, Routers, Route } from "react-router-dom"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import Projects from "./pages/Projects"
export default function App() {
  return (
    <BrowserRouter>


    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About/>} />
      <Route path="/Sign-in"element={<SignIn />} />
      <Route path="/Sign-up"element={<SignUp />} />
      <Route path="/dashboard"element={<Dashboard />} />
      <Route path="/projects"element={<Projects />} />

    </Routes>
    </BrowserRouter>
  )
}
