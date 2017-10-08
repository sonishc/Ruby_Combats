class SelectItems extends React.Component {
  constructor(props) {
    super(props)
	this.state = {value: this.props.items[this.props.user.role_id - 1].id};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	this.setState({value: event.target.value});	
  }

  handleSubmit(event) {
	event.preventDefault();
	axios.patch('/users/' + this.props.user_id, {user: {
	  id: this.props.user.id,
	  role_id: this.state.value
	}})
  }

  render() {
    const current_user = this.props.current_user;
    const user = this.props.user;
    const items = this.props.items.filter(function(item) {
	  if(current_user.id > 1) {
      	return item.id >= current_user.role_id
      }else {
      	return item.id > current_user.role_id
      };
    });
	const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');
	return(
	  <form onSubmit={this.handleSubmit}>
		<label>
		  <ItemsList items={items} user={user} change={this.handleChange} value={this.state.value}/>
		</label>	
		  <input className="btn btn-success" type="submit" value="Submit" />
		  <input name="authenticity_token" value={token} type="hidden"/>
		</form>
	);
  }
}
