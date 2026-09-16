import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./Components/Layout/AppLayout"
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import Tasks from "./Pages/Tasks"
import Register from "./Pages/Register"
import Login from "./Pages/Login"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<AppLayout/>}>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/tasks" element={<Tasks/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App