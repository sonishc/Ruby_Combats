class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      urlType:`/assets/${this.props.user_type}.jpg`,
      active: false,
      toggle: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick (img_path) {
    arena.backgroundImage = 'url(' + img_path + ')';
    this.setAttribute('id', 'locationGalleryActive');
  }

  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="img-wrap">
            <img src={ this.state.urlType } alt={ this.props.user.name } id='warrior' />
          </div>
          <div className='side'>
            <div className="statTable">
              <h1 id='name'><i>{ this.props.user.name }</i></h1>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}
