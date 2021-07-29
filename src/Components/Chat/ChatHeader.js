import React from 'react'
import PeopleAltRounded from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'

const ChatHeader = ({ channelName }) => {
    return (
        <div className='chatHeader' >
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <PeopleAltRounded />

                <div className="chatHeader__search">
                    <input type="text" placeholder='Search' />
                    <SearchRoundedIcon />
                </div>

                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader