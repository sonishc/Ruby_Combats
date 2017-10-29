class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      urlType:`/assets/${this.props.user_type}.jpg`
      };
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={ this.state.urlType } alt={ this.props.user.name } className="img-responsive" />
          </div>
          <div className="col-md-9">
            <h1><u>{ this.props.user.name }</u></h1>

            <dl className="dl-horizontal">
              <dt>{ I18n.t ("person.e_mail") }</dt>
              <dd>{ this.props.user.email }</dd>

              <dt>{ I18n.t ("person.class") }</dt>
              <dd>{ I18n.t ("class." + this.props.user_type) }</dd>

              <dt>{ I18n.t ("person.experience") }</dt>
              <dd>
                { this.props.user.experience + " " }
                <meter value={this.props.user.experience} min="0" max={ this.props.next_level.experience_level }></meter>
                {" "}{ this.props.next_level.experience_level }
              </dd>

              <dt>{ I18n.t ("person.level") }</dt>
              <dd>{ this.props.level.level }</dd>
              <dt>{ I18n.t ("person.health") }</dt>
              <dd>{ this.props.level.health_point_level }</dd>
            </dl>
            
            <a href="/users/fight" className="btn btn-danger btn-lg">{ I18n.t ("controll_input.lets_figth") }</a>
          </div>
        </div>
      </div>
    );
  }
}
