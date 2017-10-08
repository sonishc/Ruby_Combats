class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/users/sign_in', {user: {
      email: this.state.email,
      password: this.state.password,
      }
    })
  .then(function (response) {
    console.log(response);
    console.log(location);
    window.location.assign('http://localhost:3000/persons/profile');
  })
  .catch(function (error) {
    console.log(error);
    });
  }

  render(){
    return(
        <div className="wrapper">
          <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet' type='text/css'/>
            <form className="new_user"
                  id="new_user"
                  // action="/users/sign_in"
                  acceptCharset="UTF-8"
                  method="post">
              <fieldset>
                <legend>Log in</legend>
                <div className="box">
                  <input className="email"
                    id="user_email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    name="user[email]"
                    placeholder="Enter email" 
                    required />
                  <input className="email"
                    id="user_password"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                    name="user[password]"
                    placeholder="Enter password" 
                    required />
                  <button
                    onClick={this.handleSubmit}
                    className="btn">Submit!
                  </button>
                    <a href="/users/sign_up" className="btn">Sign Up</a>
                </div>
            </fieldset>
          </form>
          <a href="/users/password/new">Forgot your password?</a>
        </div>
      </div>
    );
  }
}


