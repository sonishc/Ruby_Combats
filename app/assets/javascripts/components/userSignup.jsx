class UserSignup extends React.Component {
  constructor() {
   super();
   this.state = {
     isShow: true,
     urlArena: "/assets/arena11.gif"
   };
   this.getData = this.getData.bind(this);
  }

  getData(val){
    this.setState(val);
  }

  render() {
    var showForm;
    if (this.state.isShow) {
      showForm = <SignupForm sendData={this.getData}></SignupForm>
    } else {
      showForm = <SignupFormFinal finalData={this.state}></SignupFormFinal>
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            { showForm } 
          </div>
          <div className="col-md-8 hidden-sm hidden-xs">
            <img src={ this.state.urlArena } alt="Fight Club Arena" className="img-responsive" />
          </div>
        </div>
      </div>
    );
  }
}
