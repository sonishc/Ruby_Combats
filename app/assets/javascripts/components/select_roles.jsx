class SelectRoles extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: this.props.items[this.props.user.role_id - 1].id};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});	
		console.log("You selected role  " +  this.state.value)
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.patch('/users/' + this.props.user_id, {user: {
			id: this.props.user_id,
			role_id: this.state.value
		}})
		.then(function (response) {
     		console.log(response);
   		})
   		.catch(function (error) {
     		console.log(error);
   		});
	}

	render() {
		const items = this.props.items;
		const user = this.props.user;
		const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					<select value={this.state.value} onChange={this.handleChange} >
						{
							items.map(function(item) {
								return <option key={item.id} value={item.id}>
									{item.title}
								</option>;
							})
						}
					</select>
				</label>	
				<input className="btn btn-primary	" type="submit" value="Submit" />
				<input name="authenticity_token" value={token} type="hidden"/>
			</form>
		);
	}
}
			