class SignupForm extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <div>
          <form className="new_user"
                id="new_user"
                action="/users"
                acceptCharset="UTF-8"
                method="post">
            <fieldset>
              <legend>Sign Up</legend>
              <label htmlFor="name">
                <p>Name</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your name.."
                     type="text"
                     name="user[name]"
                     id="name"
                     required/>
              <label htmlFor="user_email">
                <p>Email</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your e-mail.."
                     type="email"
                     name="user[email]"
                     id="user_email"
                     required/>
              <label htmlFor="user_password">
                <p>Password</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your password.."
                     type="password"
                     name="user[password]"
                     id="user_password"
                     minLength="6"
                     required/>
              <label htmlFor="user_password">
                <p>Password confirmation</p>
              </label>
              <input className="form-input"
                     placeholder="Retype your password.."
                     type="password"
                     name="user[password_confirmation]"
                     id="user_password"
                     minLength="6"
                     required/>
              <input type="submit"
                     name="commit"
                     value="Submit!"
                     className="submit-btn"/>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

