import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedLatestMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedLatestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-header-details-container">
        <div className="latest-match-header-details-text-container">
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-detail-value">{venue}</p>
          <p className="latest-match-detail-value">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-competing-team-logo"
        />
      </div>
      <hr className="h-line" />
      <div className="latest-match-details-scores">
        <p className="latest-match-detail-name">First Innings</p>
        <p className="latest-match-detail-value">{firstInnings}</p>
        <p className="latest-match-detail-name">Second Innings</p>
        <p className="latest-match-detail-value">{secondInnings}</p>
        <p className="latest-match-detail-name">Man of The Match</p>
        <p className="latest-match-detail-value">{manOfTheMatch}</p>
        <p className="latest-match-detail-name">Umpires</p>
        <p className="latest-match-detail-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
