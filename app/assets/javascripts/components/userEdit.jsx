class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlType:`/assets/${this.props.user_type}.jpg`,
      name: this.props.user.name,
      email: this.props.user.email,
      userAvatar: this.props.user_image,
      showEditPassword: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   
   let data = new FormData();
   
   data.append('user[name]', this.state.name);
   data.append('user[email]', this.state.email);
   data.append('user[image]', $('input[type=file]')[0].files[0]);

   $.ajax({
      url:'/users/profile',
      method:"PUT",      
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      data: data,
      processData: false,
      contentType: false,
      success:function(response) {
        if (response.error) {
          alert(response.message);
        }
      },
      error:function(){
        
      }

    });
  }

  handleClick(e){
    e.preventDefault();
    const currentState = this.state.showEditPassword;
    this.setState({ showEditPassword: !currentState });
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 hidden-xs">
            <img src={ this.state.userAvatar ? this.state.userAvatar : this.state.urlType } alt={ this.props.user.name } className="img-responsive" />
          </div>
          <div className="col-md-10 col-xs-12 text-left">
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
              <table className="text-left ">
                <tbody>
                <tr>
                  <td>Avatar</td>
                  <td>
                    <input name="image"
                           id="file" 
                           type="file" 
                           onChange={e => this.setState({image: e.target.value})}/>
                  </td>
                </tr>
                
                <tr>
                  <td>name:</td>
                  <td><input name="name" 
                         className="form-control"
                         placeholder="Enter your name:"
                         value={ this.state.name }
                         type="text" 
                         onChange={e => this.setState({name: e.target.value})}/>
                  </td>
                </tr>

                <tr>
                  <td>e-mail:</td>
                  <td>
                    <input name="name" 
                         className="form-control"
                         placeholder="Enter your email:"
                         value={ this.state.email }
                         type="email" 
                         onChange={e => this.setState({email: e.target.value})}/>
                  </td>
                </tr>

                <tr>
                  <td>Сlass:</td>
                  <td>{ this.props.user_type }</td>
                </tr>

                <tr>
                  <td>Experience:</td>
                  <td>
                    { this.props.user.experience }  <meter value={this.props.user.experience} min="0" max="100"></meter>
                  </td>
                </tr>

                <tr>
                  <td>Level:</td>
                  <td>{ this.props.user.level }</td>
                </tr>
                </tbody>
              </table>
            
            <a href="/users/profile" className="btn">Cancel</a> &nbsp;
            <button className="btn" type="submit">Save</button> &nbsp;
            <button className="btn" onClick={this.handleClick}>Change Password</button>
            { this.state.showEditPassword ? <UserEditPassword ></UserEditPassword> : null }
            </form>
          </div>
        </div>
      </div>
    );
  }
}
