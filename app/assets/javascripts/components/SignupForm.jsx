class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendData(
      {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        isShow: false
      });
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({
     email: '',
     password: '',
     password_confirmation: ''
   });
  }

  render(){
    return(
      <div className="wrapper">
        <div>
          <form className="new_user"
                id="new_user"
                onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Sign Up</legend>
                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter your e-mail.."
                        type="email"
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}
                        name="email"
                        id="user_email"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter your password.."
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        name="password"
                        id="user_password"
                        minLength="6"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Retype your password.."
                        type="password"
                        value={this.state.password_confirmation}
                        onChange={e => this.setState({ password_confirmation: e.target.value})}
                        name="password_confirmation"
                        id="user_password"
                        minLength="6"
                        required/>
                </div>
                 <button
                       onClick={this.resetForm}
                       className="btn btn-danger pull-left">Cancel
                 </button>
                 <button
                       type="submit"
                       className="btn pull-right">Next >
                 </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
