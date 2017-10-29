class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlType:`/assets/${this.props.user_type}.jpg`,
      name: this.props.user.name,
      userAvatar: this.props.user_image
    };    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.sendData(
      {
        isShow: false
      });
  }

  render() {

    let rowLinks = [
      {title: '', data: <h1><u>  {this.props.user.name} </u></h1>},
      {title: 'e-mail:', data: this.props.user.email},
      {title: 'Class:', data: this.props.user_type},
      {title: 'Experience:', data: this.props.user.experience},
      {title: 'Level:', data: this.props.user.level}
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 hidden-xs">
            <img src={ this.state.userAvatar ? this.state.userAvatar : this.state.urlType } alt={ this.props.user.name } className="img-responsive" />
          </div>
          <div className="col-md-10 text-left">
            <table>
              <tbody>{ generate_row(rowLinks) }</tbody>
            </table>
          
            <button className="btn" onClick={this.handleClick}>Edit Profile</button>
          </div>
        </div>
      </div>
    );
  }
}
