class ItemsList extends React.Component {
  generate_opt(Tag, values) {
  	const tags = values.map((value) => {
  	  return (<Tag key={value.id} value={value.id}>{value.title}</Tag>);
  	});

  	return tags;
  }
  
  selectList(items){	
  	let options = this.generate_opt('option', items)
	 return (
	   <select className="form-control selcls" value={this.props.value} onChange={this.props.change} >
	     {options}
	   </select>
	 );
  }
  
  render() {
  	const items = this.props.items
	return(
	  <label>
	    {this.selectList(items)}
	  </label>
	)
  }
}