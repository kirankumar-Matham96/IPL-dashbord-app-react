import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  console.log(teamDetails)
  const updatedTeamData = {
    id: teamDetails.id,
    name: teamDetails.name,
    teamImageUrl: teamDetails.team_image_url,
  }

  return (
    <div className="team-data-container">
      <img
        src={updatedTeamData.teamImageUrl}
        alt=""
        className="team-data-card-icon"
      />
      <p className="team-data-card-name">{updatedTeamData.name}</p>
    </div>
  )
}

export default TeamCard
