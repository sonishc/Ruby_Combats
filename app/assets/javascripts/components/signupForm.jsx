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
              <div className="box boxx">
                <input className="email" 
                       placeholder="Enter your name.."
                       type="text"
                       name="user[name]"
                       id="name"
                       required/>
                <input className="email"
                       placeholder="Enter your e-mail.."
                       type="email"
                       name="user[email]"
                       id="user_email"
                       required/>
                <input className="email"
                       placeholder="Enter your password.."
                       type="password"
                       name="user[password]"
                       id="user_password"
                       minLength="6"
                       required/>
                <input className="email"
                       placeholder="Retype your password.."
                       type="password"
                       name="user[password_confirmation]"
                       id="user_password"
                       minLength="6"
                       required/>
                <input type="submit"
                       name="commit"
                       value="Submit!"
                       className="btn"/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

