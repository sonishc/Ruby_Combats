class ItemsList extends React.Component {
  render() {
    const items = this.props.items
	const user = this.props.user;
	return(
	  <select className="form-control selcls" value={this.props.value} onChange={this.props.change} >
		{
			items.map(function(item) {
						return <option key={item.id} value={item.id}>
							{item.title}
						</option>;
					})
				}
			</select>
		)
	}
}