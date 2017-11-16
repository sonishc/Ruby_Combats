class UserEditPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      password_confirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
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
      },
      success:function(response) {
      },
      error:function(){
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
              <td>{ I18n.t ("person.password") }</td>
              <td>
                <input className="form-control"
                        placeholder="Enter your password.."
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        name="password"
                        id="user_password"
                        minLength="6"
                        />
              </td>
            </tr>

            <tr>
              <td>{ I18n.t ("person.password_confirmation") }</td>
              <td>
                <input className="form-control"
                        placeholder="Retype your password.."
                        type="password"
                        value={this.state.password_confirmation}
                        onChange={e => this.setState({ password_confirmation: e.target.value})}
                        name="password_confirmation"
                        id="user_password"
                        minLength="6"
                        />
              </td>
            </tr>
          </table>
          <button className="btn" type="submit">{ I18n.t ("save_profile") }</button>
        </form>
      </div>
    );
  }
}
