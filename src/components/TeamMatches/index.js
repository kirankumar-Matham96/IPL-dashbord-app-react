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

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="team-matches-content-container">
            <img
              src={teamBannerUrl}
              alt="banner"
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
