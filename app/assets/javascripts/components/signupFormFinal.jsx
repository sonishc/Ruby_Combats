class SignupFormFinal extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      name: '',
      type: '',
      isShow: false
   };
   this.handleSubmit = this.handleSubmit.bind(this);
   this.hiddenClass = this.hiddenClass.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   firsStepData = this.props.finalData;
   axios.post('/users', {user: {
      name: this.state.name,
      type: this.state.type,
      email: firsStepData.email,
      password: firsStepData.password,
      password_confirmation: firsStepData.password_confirmation}
   })
   .then(function (response) {
      console.log(response);
      console.log(location);
      window.location.assign('http://localhost:3000/persons/profile');
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  hiddenClass(isShow) {
    if (isShow) {
      return "wrapper";
    }
    return "wrapper hidden";
  }

  render() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    return (
      <div className={this.hiddenClass(this.props.finalData.isShow)}>
        <div>
          {this.props.finalData.isShow}
          <fieldset>
              <legend>Sign Up</legend>
              <div className="box boxx">
                <form  id="new_user_2" onSubmit={this.handleSubmit}>
                  <label>              
                    <input name="name" 
                           className="email"
                           placeholder="Enter your name:"
                           value={this.state.name}
                           type="text" 
                           required 
                           onChange={e => this.setState({name: e.target.value})}/>
                  </label>
                  <label>
                    <select required
                            className="email" 
                            name="type" 
                            value={this.state.type}
                            onChange={e => this.setState({type: e.target.value})}>

                      <option value="">Select your Player type:</option>
                      <option value="Magician">Magician</option>
                      <option value="Rogue">Rogue</option>
                      <option value="Warrior">Warrior</option>
                    </select>
                  </label>
                  <button
                     type="submit"
                     className="btn">Submit!
                  </button>
                  <input name="authenticity_token" value={token} type="hidden"/>
                </form>
              </div>
            </fieldset>
        </div>
      </div>
    );
  }
}
