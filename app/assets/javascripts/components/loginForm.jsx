class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      urlArena: "/assets/arena11.gif"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  event.preventDefault();
   $.ajax({
      url:'/users/sign_in',
      method:"POST",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data:{
        user: {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name},
      },
      success:function(response) {
        console.log("Login success!")
      },
      error:function(){
        console.log("Login is not success!")
      }
    });
  }

  render(){
    return(
        <div className="container">
          <div className="row">
              <div className="col-md-4">
                
                <form className="new_user">
                  <legend>Log in</legend>
                    
                  <div className="form-group">
                    <input className="form-control"
                      id="user_email"
                      type="email"
                      value={this.state.email}
                      onChange={event => this.setState({email: event.target.value})}
                      name="user[email]"
                      placeholder="Enter email" 
                      required />
                  </div>
                      
                  <div className="form-group">  
                    <input className="form-control"
                      id="user_password"
                      type="password"
                      value={this.state.password}
                      onChange={event => this.setState({password: event.target.value})}
                      name="user[password]"
                      placeholder="Enter password" 
                      required />
                  </div>

                  <a href="/users/sign_up" className="btn pull-left">Sign Up</a>&nbsp;
                  <button
                    onClick={this.handleSubmit}
                    className="btn pull-right">Submit!
                  </button>
                  
              </form>

            </div>
            <div className="col-md-8 hidden-sm hidden-xs">
              <img src={ this.state.urlArena } alt="Fight Club Arena" />
            </div>
          </div>
        </div>
    );
  }
}

