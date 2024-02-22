import Icon from '../../images/icon-music.svg'
import './Main.css'


function Main(){
    return (
        <div>
            <h1>Order Summary</h1>
            <p className="mainP">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='annualPlan'>
             <img src={Icon} className='icon'/>
             <div className="year">
                <h5>Annual Plan</h5>
                <h6>$59.99/Year</h6>
             </div>
             <h4>Change</h4>
            </div>
        </div>
    )
}

export default Main;