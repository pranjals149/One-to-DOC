import React from 'react'
import { useHistory } from 'react-router-dom'

function NavigationPage() {

    const history = useHistory()

    return (
        <div className="navigation">
            <div className="navigation__first">
                <a href="https://drive.google.com/file/d/1nQLABONe22F8bMYZDaNOv4G6ZuOrIGMG/view?usp=sharing" target="_blank" rel="noreferrer">
                    <div class="card">
                        <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        <div class="container">
                            <h4><b>Symptom and Report Generator</b></h4>
                        </div>
                    </div>
                </a>

                <a href="https://drive.google.com/file/d/1CunIFiZsNI4lC3xDCHk4ICxIgxnhgRmA/view?usp=sharing" target="_blank" rel="noreferrer">
                    <div class="card">
                        <img src="https://cdn.pixabay.com/photo/2017/12/30/20/59/report-3050965_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        <div class="container">
                            <h4><b>Fetch your Report</b></h4>
                        </div>
                    </div>
                </a>

                <div class="card" onClick={() => history.push("/bookappointment")}>
                    <img src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Book an Appointment</b></h4>
                    </div>
                </div>
            </div>

            <div className="navigation__second">
                <a href="https://drive.google.com/file/d/1lEOD0sejymc7RM0uAbsiKWsY9b0M4xJB/view?usp=sharing" target="_blank" rel="noreferrer">
                    <div class="card">
                        <img src="https://cdn.pixabay.com/photo/2016/12/05/19/43/pill-1884775_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        <div class="container">
                            <h4><b>Your Prescriptions</b></h4>
                        </div>
                    </div>
                </a>

                <a href="https://drive.google.com/file/d/129SQt_CSpOwMiMCm79loNNqEaEjFBi26/view?usp=sharing" target="_blank" rel="noreferrer">
                    <div class="card">
                        <img src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        <div class="container">
                            <h4><b>Payments</b></h4>
                        </div>
                    </div>
                </a>

                <div class="card" onClick={() => history.push("/community")}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/17/59/association-152746_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Connect to Community</b></h4>
                    </div>
                </div>
            </div>

            <div className="navigation__third">
                <div class="card" onClick={() => history.push("/questions")}>
                    <img src="https://cdn.pixabay.com/photo/2016/02/18/03/48/japanese-1206509_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>See Previously answered Common Questions</b></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationPage
