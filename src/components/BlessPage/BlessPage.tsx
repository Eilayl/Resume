import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './BlessPage.css'

export const BlessPage = () => {
  const [seconds, setSeconds] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    if (seconds <= 0) {
      navigate('/')
      return
    }

    const timer = setTimeout(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [seconds, navigate])

  return (
    <div className="bless-container">
      <div className="bless-card">
        <h1>Thank you for applying!</h1>
        <p>
          I’ve received your details and will get back to you as quickly as I can.
        </p>
        <p className="countdown">
          Returning to homepage in {seconds} second{seconds !== 1 ? 's' : ''}...
        </p>
        <button onClick={() => navigate('/')} className="return-btn">
          Return now
        </button>
      </div>
    </div>
  )
}
