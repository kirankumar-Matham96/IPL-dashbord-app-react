import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount = () => {
    this.getMatchCardsList()
  }

  getMatchCardsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const initialResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseJson = await initialResponse.json()
    this.setState({
      latestMatchDetails: responseJson.latest_match_details,
      recentMatches: responseJson.recent_matches,
      teamBannerUrl: responseJson.team_banner_url,
      isLoading: false,
    })
  }

  getBackGroundGradientClass = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let tamBGGradientClass = ''
    switch (id) {
      case 'RCB':
        tamBGGradientClass = 'team-matches-container bg-gradient-rcb'
        break
      case 'KKR':
        tamBGGradientClass = 'team-matches-container bg-gradient-kkr'
        break
      case 'KXP':
        tamBGGradientClass = 'team-matches-container bg-gradient-kxp'
        break
      case 'CSK':
        tamBGGradientClass = 'team-matches-container bg-gradient-csk'
        break
      case 'RR':
        tamBGGradientClass = 'team-matches-container bg-gradient-rr'
        break
      case 'MI':
        tamBGGradientClass = 'team-matches-container bg-gradient-mi'
        break
      case 'SH':
        tamBGGradientClass = 'team-matches-container bg-gradient-sh'
        break
      case 'DC':
        tamBGGradientClass = 'team-matches-container bg-gradient-dc'
        break
      default:
        tamBGGradientClass = 'team-matches-container'
    }
    return tamBGGradientClass
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state

    const bgContainerGradientClassName = this.getBackGroundGradientClass()

    return (
      <div className={bgContainerGradientClassName}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-content-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-image"
            />
            <p className="team-matches-description">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="team-matches-match-cards-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
