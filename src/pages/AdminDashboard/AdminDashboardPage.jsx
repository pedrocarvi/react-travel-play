import React from 'react'
import NavigationBar from '../../shared/Navbar/NavigationBar'
import Footer from '../../shared/Footer/Footer'
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard'

const AdminDashboardPage = () => {
    return (
        <div>
            <NavigationBar />
            <AdminDashboard />
            <Footer />
        </div>
    )
}

export default AdminDashboardPage