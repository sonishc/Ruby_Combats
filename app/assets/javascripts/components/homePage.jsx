class HomePage extends React.Component {
  constructor() {
   super();
   this.state = {
     urlArena: "/assets/arena11.gif"
   };
  }
  render() {
    
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Fight Club!</h1>
          <p>The best fighting game</p>
        </div>

        <div className="row">
          <div className="col-md-7 text-left">
            <h2>About</h2>
            <p><u>Fight Club</u> is an exciting browser game in which everyone can feel like a Rogue, Warrior or Magician.</p>
            <p>During sign up user can choose Class of its player: Rogue, Warrior or Magician, can upload Avatar for character and start fighting with bot or other players.</p>
            <p>Any fight consists of a consistent exchange of punches between two players. During the fight, players are given a choice between the hit and block zones. Zones are the head, chest, stomach, waist and legs.</p>
            <p>After the fight, each player gets an experience. If a player has enough experience, he will be assigned a new level. The game has 12 levels (see table).</p>
            <p>Also, at each level, the player can use Items that increase the strength of his strike or defense.</p>
            <img src={ this.state.urlArena } alt="Fight Club Arena" className="img-responsive" /><br/>
          </div>

          <div className="col-md-5">
            <table className="table table-bordered table-striped">
              <caption>
                <h2>Levels in game</h2>
              </caption>
              <tbody>
                <tr>
                  <th>Level</th>
                  <th>Experience</th>
                  <th>Health point</th>
                </tr>
                { generate_level_row(LEVELS_INFO) }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
