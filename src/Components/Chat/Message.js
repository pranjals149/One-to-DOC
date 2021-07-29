
import { Avatar } from '@material-ui/core'
import React from 'react'
import ReactTimeago from 'react-timeago'

const Message = ({ timestamp, user, message }) => {

    return (
        <div className='message' >
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHf0QirkFvJig/profile-displayphoto-shrink_400_400/0/1585327736690?e=1632355200&v=beta&t=3BHseOor088iZVNnkkOs7Qhrc29ZjXfTRbvDiqIXdb4" />
            <div className="message__info">
                <h4>Pranjal
                    <span className="message__timestamp">
                        <ReactTimeago
                            date={new Date(timestamp?.toDate()).toUTCString()}
                        />
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div >
    )
}

export default Message