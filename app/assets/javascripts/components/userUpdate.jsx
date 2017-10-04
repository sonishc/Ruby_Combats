//import axios from 'axios';
class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
    user = this.state.user;
    user_id = props.user_id;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      event.preventDefault();
      let user = this.state.user;
      let name = event.target.name;
      let value = event.target.value;

      user[name] = value;

      this.setState({user});
  }

  submit() {
    axios.post("/user/"+user_id, { 
      user
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    return (
      <form  id="user-edit" >
        <label>
          Type your name:
          <input name="name" value={this.state.name} type="text" required onChange={this.handleChange}/>
        </label>
        <label>
          Select your Player type:
          <select required name="type" value={this.state.type} onChange={this.handleChange}>
            <option value="">select</option>
            <option value="Magician">Magician</option>
            <option value="Rogue">Rogue</option>
            <option value="Warrior">Warrior</option>
          </select>
        </label>
        <input type="submit" value="Submit" onClick={this.submit}/>
        <input name="utf8" value="✓" type="hidden"/>
        <input name="authenticity_token" value={token} type="hidden"/>
      </form>
    );
  }
}
