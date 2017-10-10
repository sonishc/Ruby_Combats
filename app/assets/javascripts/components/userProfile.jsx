class UserProfile extends React.Component {
  constructor() {
   super();
   this.state = {
     urlType: "/assets/Magician.jpg"
   };
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={ this.state.urlType } alt={ this.props.user.name } />
          </div>
          <div className="col-md-8">
            <h1>{ this.props.user.name }</h1>
            <p>{ this.props.user.email }</p>
          </div>
        </div>
      </div>
    );
  }
}
