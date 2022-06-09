import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const updatedTeamData = {
    id: teamDetails.id,
    name: teamDetails.name,
    teamImageUrl: teamDetails.team_image_url,
  }

  return (
    <Link to={`/ipl/${updatedTeamData.id}`} className="team-card-link-contaier">
      <div className="team-data-container">
        <img
          src={updatedTeamData.teamImageUrl}
          alt=""
          className="team-data-card-icon"
        />
        <p className="team-data-card-name">{updatedTeamData.name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
