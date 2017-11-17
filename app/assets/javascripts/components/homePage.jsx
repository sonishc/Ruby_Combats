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
          <h1>{ I18n.t ("home.jumbotron.h1") }</h1>
          <p>{ I18n.t ("home.jumbotron.p") }</p>
        </div>

        <div className="row">
          <div className="col-md-7 text-left">
            <h2>{ I18n.t ("home.about.h2") }</h2>
            <p>{ I18n.t ("home.about.text_line_1") }</p>
            <p>{ I18n.t ("home.about.text_line_2") }</p>
            <p>{ I18n.t ("home.about.text_line_3") }</p>
            <p>{ I18n.t ("home.about.text_line_4") }</p>
            <p>{ I18n.t ("home.about.text_line_5") }</p>
            <img src={ this.state.urlArena } alt="Fight Club Arena" className="img-responsive" /><br/>
          </div>

          <div className="col-md-5">
            <table className="table table-bordered table-striped">
              <caption>
                <h2>{ I18n.t ("home.levels_title") }</h2>
              </caption>
              <tbody>
                <tr>
                  <th>{ I18n.t ("home.level") }</th>
                  <th>{ I18n.t ("home.experience") }</th>
                  <th>{ I18n.t ("home.health_point") }</th>
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
