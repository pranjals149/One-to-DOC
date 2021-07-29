import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useState } from 'react'
import ChatHeader from './ChatHeader'
import { useSelector } from 'react-redux'
import Message from './Message'
import { selectChannelId, selectChannelName } from '../../features/appSlice'
import { db } from '../../firebase'
import firebase from "firebase"
import { useEffect } from 'react'

const Chat = () => {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }


    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault()

        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: "Pranjal",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className='chat' >

            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map(message => (
                    <Message message={message.message} timestamp={message.timestamp} user={message.user} />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input type="text" disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message @${channelName}`} />
                    <button className='chat__inputButton' onClick={sendMessage} disabled={!channelId} type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
