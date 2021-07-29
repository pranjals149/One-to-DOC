import React from 'react'
import Appointments from '../../Components/Appointments/Appointments'
import Dashboard from '../../Components/Dashboard/Dashboard'

function BookAppointment() {
    return (
        <div className="bookappointment">
            <Dashboard />
            <Appointments />
        </div>
    )
}

export default BookAppointment
