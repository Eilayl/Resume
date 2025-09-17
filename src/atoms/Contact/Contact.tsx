import React, { useState } from "react"
import './Contact.css'
import axios, { AxiosError } from 'axios';
import { FaRegPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type ContactProps = {
    darkMode: boolean;
}
export const Contact = ({darkMode} : ContactProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const[error, setError] = useState('');
    const navigate = useNavigate();

    const SendMessage = async () => {
        try{

            const URL = process.env.REACT_APP_API_URL || 'http://localhost:8000'
            const response = await axios.post(`${URL}sendmsg`, {
                                name, phone, email, subject, message
            }, {})
            navigate('/bless')
        }
        catch(error)
        {
            //@ts-ignore
            setError(error.response.data.error)
        }
    }
    const CodeIcon = FaRegPaperPlane as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
    return (
      <div className={`contact-container ${darkMode ? "dark" : "light"}`}>
        <span className="contact-title">Contact Me</span>
        <form>
        <input placeholder="Enter your full name." value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input placeholder="Enter your phone number (Optional)." type="number" maxLength={10} value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
        <input placeholder="Enter a subject." value={subject} onChange={(e) => {setSubject(e.target.value)}}/>
        <textarea maxLength={1500} placeholder="Enter your Message..." value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            <button className="contact-button" type="button" onClick={() => SendMessage()}>
                <span>Send Message</span>
                <CodeIcon size={25} className='icon'/>
            </button>
                <span className="error">{error}</span>
        </form>
        </div>
    )
}
