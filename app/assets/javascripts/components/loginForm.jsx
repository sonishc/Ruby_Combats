class LoginForm extends React.Component {
  render(){
    return(
        <div className="wrapper">
          <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' rel='stylesheet' type='text/css'/>
            <form className="new_user"
                  id="new_user"
                  action="/users/sign_in"
                  acceptCharset="UTF-8"
                  method="post">
              <fieldset>
                <legend>Log in</legend>
                <div className="box">
                    <input className="email"
                           id="user_email"
                           type="email"
                           name="user[email]"
                           placeholder="Enter email" 
                           required />
                    <input className="email"
                           id="user_password"
                           type="password"
                           name="user[password]"
                           placeholder="Enter password" 
                           required />
                    <input type="submit"
                           name="commit"
                           value="Log in"
                           className="btn"/>
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
