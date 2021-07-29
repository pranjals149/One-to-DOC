import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Dashboard from '../../Components/Dashboard/Dashboard'

function Questions() {

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="questions">
            <Dashboard />

            <div className="questions__main">
                <div class="card" onClick={() => history.push("/questionCold")} style={{ height: "500px" }}>
                    <img src="https://cdn.pixabay.com/photo/2021/02/20/10/42/icon-6032924_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Common Cold</b></h4>
                    </div>
                </div>

                <div class="card" onClick={() => history.push("/questionTooth")} style={{ height: "500px" }}>
                    <img src="https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Toothache</b></h4>
                    </div>
                </div>

                <div class="card" onClick={() => history.push("/questionAcidity")} style={{ height: "500px" }}>
                    <img src="https://cdn.pixabay.com/photo/2012/04/02/13/57/chemical-reaction-24562_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Acidity</b></h4>
                    </div>
                </div>

                <div class="card" style={{ height: "500px" }}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/13/34/diagnostics-161140_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Which Doctors to see ?</b></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
