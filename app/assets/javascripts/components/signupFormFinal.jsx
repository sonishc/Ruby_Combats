class SignupFormFinal extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      name: '',
      type: ''
   };
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   firsStepData = this.props.finalData;
   $.ajax({
      url:'/users/signup',
      method:"POST",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data:{
        user: {
          name: this.state.name,
          type: this.state.type,
          email: firsStepData.email,
          password: firsStepData.password,
          password_confirmation: firsStepData.password_confirmation},
      },
      success:function(response) {
       
      },
      error:function(){
        alert("error");
      }

    });
  }

  render() {

    return (
      <div className="wrapper">
        <fieldset>
          <legend>Sign Up</legend>
          <form  id="new_user_2" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input name="name" 
                     className="form-control"
                     placeholder="Enter your name:"
                     value={this.state.name}
                     type="text" 
                     required 
                     onChange={e => this.setState({name: e.target.value})}/>
            </div>

            <div className="form-group">
              <select required
                      className="form-control" 
                      name="type" 
                      value={this.state.type}
                      onChange={e => this.setState({type: e.target.value})}>
                <option value="">Select your Player type:</option>
                <option value="Magician">Magician</option>
                <option value="Rogue">Rogue</option>
                <option value="Warrior">Warrior</option>
              </select>
            </div>

            <button
               type="submit"
               className="btn pull-right">Submit!
            </button>

          </form>
        </fieldset>
      </div>
    );
  }
}
