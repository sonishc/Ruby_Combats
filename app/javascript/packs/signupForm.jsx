import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../../assets/stylesheets/signupForm.scss'

// data-disable-with="Create my account"

class SignupForm extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <div>
          <form className="new_user"
                id="new_user"
                action="/signup"
                accept-charset="UTF-8"
                method="post">
            <fieldset>
              <legend>Sign Up</legend>
              <label for="name">
                <p>Name</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your name.."
                     type="text"
                     name="user[name]"
                     id="name"
                     required/>
              <label for="user_email">
                <p>Email</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your e-mail.."
                     type="email"
                     name="user[email]"
                     id="user_email"
                     required/>
              <label for="user_password">
                <p>Password</p>
              </label>
              <input className="form-input"
                     placeholder="Enter your password.."
                     type="password"
                     name="user[password_digest]"
                     id="user_password"
                     minLength="5"
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SignupForm />,
    document.getElementById('root')
  )
})

