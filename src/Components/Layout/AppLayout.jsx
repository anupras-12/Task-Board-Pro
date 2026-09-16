import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"


const Applayout = () => {
  return (
      <>
      
<div className="flex">
        <Sidebar />
    <div className="flex flex-col flex-1">
        <Header/>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
</div>
      </>
  )
}

export default Applayout