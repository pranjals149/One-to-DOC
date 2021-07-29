import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../../features/appSlice'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import "./DoctorName.css"

const DoctorName = ({ id, docName, specialization }) => {

    const dispatch = useDispatch()

    return (
        <div className='sidebarChannel' onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: docName
        }))} >

            <h4><span className='sidebarChannel__hash'>@</span>{docName} ({specialization})</h4>
            <div style={{ color: "green" }}>
                <FiberManualRecordIcon />
            </div>

        </div>
    )
}

export default DoctorName