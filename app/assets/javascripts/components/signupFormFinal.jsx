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
	      if (response.error) {
          alert(response.message);
        }
      }
    });
  }

  generate_option(option_list){
    const option = option_list.map((value, index) => {
      return (<option key={index} value={value.option}>{value.title}</option>);
    });

    return option;
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
                { this.generate_option(USER_CLASS_OPTION) }
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
