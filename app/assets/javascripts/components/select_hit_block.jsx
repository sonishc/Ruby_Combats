class SelectHitBlock extends React.Component {
  
  constructor() {
    super();

  }
  countOptions(){
    return HIT_TYPES.length
  }

  renderItems(items, name) {
    return (
      <select className="select-hit" name={ name } onChange={ this.props.handleChange }>
        { items.map((item, index) => {
<<<<<<< HEAD
          return <option key={ index } value={ index }>{ I18n.t ("select_strike." + item) }</option>
=======
          return <option key={ index } value={ index }>{ item }</option>
>>>>>>> Delete unused files
        }) }
      </select>
    )
  }

  render () {
    return (
      <div>
        { this.renderItems(HIT_TYPES, 'selectedAttackIndex') }
        { this.renderItems(BLOCK_TYPES, 'selectedBlockIndex') } 
      </div>
    )
  }
}
