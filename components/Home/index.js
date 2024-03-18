import {useState} from 'react'
import {HiCash} from 'react-icons/hi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Modal from 'react-modal'
import './index.css'

const Home = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const loggedOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    console.log(history)
    toggleModal()
  }

  return (
    <div className="main-dashboard-container">
     >
       
        <div>
          <h2>Line Graph </h2>
          <img
            src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710689025/Screenshot_2024-03-17_205331_fohzli.png"
            alt="line-graph"
          />
        </div>
        <div className="data-chart">
          <div>
            <h1>Top Products</h1>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710688662/Top_Products_Card_ahq4z7.png"
              alt="left"
            />
          </div>
          <div>
            <h1>Today Schedules</h1>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710688662/Schedules_Card_u53rmt.png"
              alt="right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home)
