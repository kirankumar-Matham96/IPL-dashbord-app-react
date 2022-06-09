import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const updatedMatchDetails = {
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    date: matchDetails.date,
    firstInnings: matchDetails.first_innings,
    manOfTheMatch: matchDetails.man_of_the_match,
    matchStatus: matchDetails.match_status,
    result: matchDetails.result,
    secondInnings: matchDetails.second_innings,
    umpires: matchDetails.umpires,
    venue: matchDetails.venue,
  }
  const className =
    updatedMatchDetails.matchStatus === 'Lost'
      ? 'match-card-status-loss'
      : 'match-card-status-won'

  return (
    <li className="match-card-details-container">
      <img
        src={updatedMatchDetails.competingTeamLogo}
        alt="team"
        className="match-card-team-logo"
      />
      <h1 className="match-card-team-name">
        {updatedMatchDetails.competingTeam}
      </h1>
      <p className="match-card-result">{updatedMatchDetails.result}</p>
      <p className={className}>{updatedMatchDetails.matchStatus}</p>
    </li>
  )
}

export default MatchCard
