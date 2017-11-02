class UserEditPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      password_confirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
   event.preventDefault();
   $.ajax({
      url:'/users/update_password',
      method:"PATCH",
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      data:{
        user: {
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
      }
    });
  }

  render() {
    
    return (
      <div >
        <br />
        <form onSubmit={this.handleSubmit}>
          <table className="">
            <tr>
              <td>Password:</td>
              <td>
                <input className="form-control"
                        placeholder="Enter your password.."
                        type="password"
                        value={this.state.password}
                        onChange={event => this.setState({password: event.target.value})}
                        name="password"
                        id="user_password"
                        minLength="6"
                        />
              </td>
            </tr>

            <tr>
              <td>Password confirmation:</td>
              <td>
                <input className="form-control"
                        placeholder="Retype your password.."
                        type="password"
                        value={this.state.password_confirmation}
                        onChange={event => this.setState({ password_confirmation: event.target.value})}
                        name="password_confirmation"
                        id="user_password"
                        minLength="6"
                        />
              </td>
            </tr>
          </table>
          <button className="btn" type="submit">Save</button>
        </form>
      </div>
    );
  }
}
