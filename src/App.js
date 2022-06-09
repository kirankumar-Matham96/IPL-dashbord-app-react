import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="team-matches" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
