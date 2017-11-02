class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      user: this.props.user,
      user_type: this.props.user_type,
      user_image: this.props.image
    };
    this.getData = this.getData.bind(this);
  }

  getData(val){
    this.setState(val);
  }

  render() {
    var showProfile;
    if (this.state.isShow) {
      showProfile = <UserProfile sendData={this.getData} 
                                 user={this.state.user} 
                                 user_type={this.state.user_type} 
                                 user_image={this.state.user_image}>
                    </UserProfile>
    } else {
      showProfile = <UserEdit finalData={this.state} 
                              user={this.state.user} 
                              user_type={this.state.user_type}
                              user_image={this.state.user_image}>
                    </UserEdit>
    }
    
    return (
      <div className="container">
        <div className="row userptofile">
          { showProfile } 
        </div>
      </div>
    );
  }
}
