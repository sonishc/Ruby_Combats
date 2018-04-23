class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/users/signup', {user: {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation}
    })
    .then(response => {
      if (response.data.success) {
        window.location.assign('/persons/profile');
      } else {
        alert(response.data.message);
      }
    })
  }

  render(){
    return(
      <div className="wrapper">
        <div>
          <form className="new_user"
                id="new_user">
            <fieldset>
              <legend>Sign Up</legend>
              <div className="box boxx">
                <input className="email"
                       onChange={e => this.setState({name: e.target.value})}
                       placeholder="Enter your name.."
                       type="text"
                       value={this.state.name}
                       name="user[name]"
                       id="name"
                       required/>
                <input className="email"
                       placeholder="Enter your e-mail.."
                       type="email"
                       value={this.state.email}
                       onChange={e => this.setState({email: e.target.value})}
                       name="user[email]"
                       id="user_email"
                       required/>
                <input className="email"
                       placeholder="Enter your password.."
                       type="password"
                       value={this.state.password}
                       onChange={e => this.setState({password: e.target.value})}
                       name="user[password]"
                       id="user_password"
                       minLength="6"
                       required/>
                <input className="email"
                       placeholder="Retype your password.."
                       type="password"
                       value={this.state.password_confirmation}
                       onChange={e => this.setState({ password_confirmation: e.target.value})}
                       name="user[password_confirmation]"
                       id="user_password"
                       minLength="6"
                       required/>
                <input
                      className='btn'
                      type='submit'
                      value='submit'
                      onClick={this.handleSubmit}/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
