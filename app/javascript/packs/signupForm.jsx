class SignupForm extends React.Component {
  render(){
    return(
      <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form class="new_user" id="new_user" action="/signup" accept-charset="UTF-8" method="post">
          <label for="user_name">Name</label>
          <input class="form-control" placeholder=" Enter your name.." type="text" name="user[name]" id="user_name" />

          <label for="user_email">Email</label>
          <input class="form-control" placeholder=" Enter your e-mail.." type="email" name="user[email]" id="user_email" />

          <label for="user_password">Password</label>
          <input class="form-control" placeholder=" Enter your password.." type="password" name="user[password]" id="user_password" />

          <label for="user_password_confirmation">Confirmation</label>
          <input class="form-control" placeholder=" Confirm your password.." type="password" name="user[password_confirmation]" id="user_password_confirmation" />

          <input type="submit" name="commit" value="Create my account" class="btn btn-primary" data-disable-with="Create my account" />
        </form>
      </div>
      </div>
    );
  }
}

