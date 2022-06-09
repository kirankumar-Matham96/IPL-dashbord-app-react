import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const initialResponse = await fetch('https://apis.ccbp.in/ipl')
    const response = await initialResponse.json()
    this.setState({
      teamsList: response.teams,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL DashBoard</h1>
        </div>
        <div className="team-cards-container">
          {!isLoading ? (
            teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    )
  }
}

export default Home
