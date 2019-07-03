import React, {Component} from 'react';
import './App.css';
import Leaderboard from "./components/LeaderBoard";
import axios from "axios";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: [],
      name: '',
      campus: '',
      role: ''
    }
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updatePlayerRatio = this.updatePlayerRatio.bind(this);
  }

  componentDidMount() {
    this.getAllPlayers()
  }

getAllPlayers(){
  axios.get("/api/cheetah")
  .then((response) => {
    this.setState({players:response.data})
  })
  .catch(err => console.log(err));
}

postThatWoodpecker(){
  const newWoodpecker = {
    name: this.state.name,
    campus: this.state.campus,
    role: this.state.role
  }
  axios.post("/api/woodpecker", newWoodpecker)
  .then((response) => {
    this.setState({
      players:response.data,
      name: '',
      campus: '',
      role: ''
    })
  })
}

updatePlayerRatio(id, match){
  axios.put(`/api/tapeworm/${id}?match=${match}`)
  .then((response) => {
    this.setState({
      players:response.data
    })
  })
  .catch(err => console.log(err));
}

changeHandler(e){
  this.setState({
    campus: e.target.value
  })
}

universalChangeHandler(property, value) {
  this.setState({
    [property]: value
  })
}


  render(){
    const {players} = this.state;
  return (
    <div className="App">
      <Leaderboard players={players} updatePlayerRatio={this.updatePlayerRatio}/>
      <div className="input-container">
      <input className="" onChange={(e) => this.setState({name: e.target.value})}
       value={this.state.name}></input>
      <input className="" onChange={this.changeHandler} ></input>
      <input className="" onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} 
      name="role" 
      value={this.state.role}></input>
        </div>
      <button onClick={() => this.postThatWoodpecker()}>Add Player</button>
    </div>
  );
}
}
export default App;
