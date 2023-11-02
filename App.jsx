import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      
      <nav className="navBar">
        <div className='navbar-icon'>
          <h1>Linked
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrDIFhDUMdtA0COBDI1h5mfUL_XyLH4vh9w&usqp=CAU" width='45px' alt="" />
          </h1>
        </div>
        <div className='navbar-search'>
          <img id="glass" src="https://img.icons8.com/?size=100&id=132&format=png"/>
          <input id="input" type="text" placeholder="Search"></input>
        </div>
        <ul className='navbar-links'>
          <button className="button">
            <li><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8icZtW8sJphUn1pmKyxjZCtzezuGKBlGmJQ&usqp=CAU" alt="" />Home</a></li>
          </button>
          <button className="button">
            <li> <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrITRI-0saQlTUhEZwhq9hfNQAkDftKmwlBA&usqp=CAU" alt="" />My Network</a></li>
          </button>
          <button className="button">
            <li> <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93JVgJlD-dYGnDfcYGW5Cd7WAg4zAF9W_BA&usqp=CAU" alt="" />Jobs</a></li>
          </button>
          <button className="button">
            <li> <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA4lzFMpDKf2zimQhat0rR5S1Jh-3GD6Niw&usqp=CAU" alt="" />Messaging</a></li>
          </button>
          <button className="button">
            <li><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDcBm8Cjf0Qo0GPs54Lg8Ztp3eoFpwXPN4w&usqp=CAU" alt="" />Notifications</a></li>
          </button> 
          <button className="button">  
            <li><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDsNIiOWT8EjGS7ZRJ46EjZEqg7ysbmXs7w&usqp=CAU" alt="" />Me</a></li>
          </button>
        </ul>     
        
      </nav>


        {/* <div class="box"><img className='logoImg' src="https://th.bing.com/th/id/OIP.ozDiSGJlUqI6815cRlJiNAHaHa?pid=ImgDet&rs=1"/>
</div> */}
        <div id="container">
          <div class="box">
            <img class="profilePic"src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA& usqp=CAU"/>
            
            <div className="innerbox">Name</div>
            <div className="innerbox">Job Title</div>
            </div>
          <div class="box">Education
            <div className="innerbox">School 1</div>
            <div className="innerbox">School 2</div>
            <div className="innerbox">School 3</div>
          
          </div>
          <div class="box">Experience
            <div className="innerbox">Experience 1</div>
            <div className="innerbox">Experience 2</div>
            <div className="innerbox">Experience 3</div>
          </div>
            
          <div class="box">Interests
            <div className="innerbox">Interest 1</div>
            <div className="innerbox">Interest 2</div>
            <div className="innerbox">Interest 3</div>
          </div>
        </div>
        <footer>
          <div className="footer">
            {/* <ul className="footerList"> */}
              <button>
                <p className="footerListItems">About</p>
              </button>
              <button>
                <p className="footerListItems">Accessibility</p>
              </button>
              <button>
                <p className="footerListItems">Talent Solutions</p>
              </button>
              <button>
                <p className="footerListItems">Community Guidelines</p>
              </button>
              <button>
                <p className="footerListItems">Careers</p>
              </button>
              <button>
                <p className="footerListItems">Marketing Solutions</p>
              </button>
            {/* </ul> */}
          </div>
        </footer>
        
    </>
  )
}

export default App
