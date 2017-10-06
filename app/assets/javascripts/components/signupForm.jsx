class SignupForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     email: '',
     password: '',
     password_confirmation: '',
     isShow: true
   };
   this.handleSubmit = this.handleSubmit.bind(this);
   this.resetForm = this.resetForm.bind(this);
   this.hiddenClass = this.hiddenClass.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendData(
      {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        isShow: true
      });
    this.setState({isShow: false});
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({
     email: '',
     password: '',
     password_confirmation: ''
   });
  }

  hiddenClass(isShow) {
    if (isShow) {
      return "wrapper";
    }
    return "wrapper hidden";
  }

 render(){
   return(
     <div className={this.hiddenClass(this.state.isShow)}>
       <div>
         <form className="new_user" id="new_user" onSubmit={this.handleSubmit}>
           <fieldset>
             <legend>Sign Up</legend>
             <div className="box boxx">
               <input className="email"
                      placeholder="Enter your e-mail.."
                      type="email"
                      value={this.state.email}
                      onChange={e => this.setState({email: e.target.value})}
                      name="email"
                      id="user_email"
                      required/>
               <input className="email"
                      placeholder="Enter your password.."
                      type="password"
                      value={this.state.password}
                      onChange={e => this.setState({password: e.target.value})}
                      name="password"
                      id="user_password"
                      minLength="6"
                      required/>
               <input className="email"
                      placeholder="Retype your password.."
                      type="password"
                      value={this.state.password_confirmation}
                      onChange={e => this.setState({ password_confirmation: e.target.value})}
                      name="password_confirmation"
                      id="user_password"
                      minLength="6"
                      required/>
               <button
                     onClick={this.resetForm}
                     className="btn">Cancel
               </button>
               <button
                     type="submit"
                     className="btn">Next >
               </button>
             </div>
           </fieldset>
         </form>
       </div>
     </div>
   );
 }
}
