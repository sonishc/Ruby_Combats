class UserSignup extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     
   };
   this.getData = this.getData.bind(this);
  }

  getData(val){
    this.setState(val);
  }

  render() {
    return (
      <div>
        <SignupForm sendData={this.getData}></SignupForm>
        <SignupFormFinal finalData={this.state}></SignupFormFinal>
      </div>
    );
  }
}
