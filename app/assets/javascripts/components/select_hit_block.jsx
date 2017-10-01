class SelectHitBlock extends React.Component {
  
  constructor() {
    super();

    // For change select options count -> also add change in fight.jsx state.  
    this.blocks = ['Block head', 'Block chest', 'Block stomach',
                'Block back','Block belt','Block legs']

    this.hits = ['Hit head', 'Hit chest', 'Hit stomach',
              'lower back','Hit belt','Hit legs']

  }
  countOptions(){
    return this.hits.length
  }

  renderItems(items, name) {
    return (
      <select className="select-hit" name={ name } onChange={ this.props.handleChange }>
        { items.map((item, index) => {
          return <option key={ index } value={ index }>{ item }</option>
        }) }
      </select>
    )
  }

  render () {
    return (
      <td>
        { this.renderItems(this.hits, 'attackU') }
        { this.renderItems(this.blocks, 'blockU') } 
      </td>
    )
  }
}
