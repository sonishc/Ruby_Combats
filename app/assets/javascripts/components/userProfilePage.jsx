class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      user: this.props.user,
      level: this.props.level,
      next_level: this.props.next_level,
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
                                 user_image={this.state.user_image}
                                 level={this.state.level}
                                 next_level={this.state.next_level}>
                    </UserProfile>
    } else {
      showProfile = <UserEdit finalData={this.state} 
                              user={this.state.user} 
                              user_type={this.state.user_type}
                              user_image={this.state.user_image}
                              level={this.state.level}
                              next_level={this.state.next_level}>
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
