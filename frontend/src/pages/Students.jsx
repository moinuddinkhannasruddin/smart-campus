import StudentDashboardContainer from '@/containers/students/Student Dashboard/StudentDashboardContainer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Students = () => {
    return (
        <div>
            <StudentDashboardContainer/>
            <Outlet />
        </div>
    )
}

export default Students