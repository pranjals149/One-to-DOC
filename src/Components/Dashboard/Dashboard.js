import React from 'react'
import { useHistory } from 'react-router-dom'

function Dashboard() {

    const history = useHistory()

    return (
        <div className="dashboard">
            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2019/12/02/03/26/snow-4666831_960_720.jpg" alt="" title="Homepage" onClick={() => history.push("/front")} />

            <a href="https://drive.google.com/file/d/1nQLABONe22F8bMYZDaNOv4G6ZuOrIGMG/view?usp=sharing" target="_blank" rel="noreferrer">
                <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png" alt="" title="Symptom and Report Generator" />
            </a>

            <a href="https://drive.google.com/file/d/1CunIFiZsNI4lC3xDCHk4ICxIgxnhgRmA/view?usp=sharing" target="_blank" rel="noreferrer">
                <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/12/30/20/59/report-3050965_960_720.jpg" alt="" title="Fetch your Report" />
            </a>

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" alt="" title="Book an Appointment" onClick={() => history.push("/bookappointment")} />

            <a href="https://drive.google.com/file/d/1lEOD0sejymc7RM0uAbsiKWsY9b0M4xJB/view?usp=sharing" target="_blank" rel="noreferrer">
                <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2016/12/05/19/43/pill-1884775_960_720.jpg" alt="" title="Your Prescriptions" />
            </a>

            <a href="https://drive.google.com/file/d/129SQt_CSpOwMiMCm79loNNqEaEjFBi26/view?usp=sharing" target="_blank" rel="noreferrer">
                <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" alt="" title="Payments" />
            </a>

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2016/02/18/03/48/japanese-1206509_960_720.jpg" alt="" title="Previously Answered Common Questions" onClick={() => history.push("/questions")} />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2013/07/12/17/59/association-152746_960_720.png" alt="" title="Connect to Community" onClick={() => history.push("/community")} />
        </div>
    )
}

export default Dashboard
