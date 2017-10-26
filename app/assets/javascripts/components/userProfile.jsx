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
          <div className="col-md-2">
            <img src={ this.state.urlType } alt={ this.props.user.name } className="img-responsive" />
          </div>
          <div className="col-md-9">
            <h1><u>{ this.props.user.name }</u></h1>

            <dl className="dl-horizontal">
              <dt>e-mail:</dt>
              <dd>{ this.props.user.email }</dd>

              <dt>Сlass:</dt>
              <dd>{ this.props.user_type }</dd>

              <dt>Experience:</dt>
              <dd>{ this.props.user.experience }  <meter value={this.props.user.experience} min="0" max="100"></meter></dd>

              <dt>Level:</dt>
              <dd>{ this.props.user.level }</dd>
            </dl>
            
            <a href="/users/fight" className="btn btn-danger btn-lg">Let's Fight!</a>
          </div>
        </div>
        <FayeMessages name={this.props.user.name}/>
      </div>
    );
  }
}
