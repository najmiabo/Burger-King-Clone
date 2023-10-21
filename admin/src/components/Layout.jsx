import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {/* SIDEBAR */}
                    <Sidebar />
                    <div className="col py-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}