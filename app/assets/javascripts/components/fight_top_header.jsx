class FightTopHeader extends React.Component {

  constructor(){
    super();
  }

  renderHead(addClass, value) {
      return <th className={ addClass  + "" }>{ value }</th>
  };

  render (){
    return (
      <tr>
        { this.renderHead("col-md-3 center", this.props.player)}
        { this.renderHead("col-md-6 center", this.props.playInfo)}
        { this.renderHead("col-md-3 center", this.props.bot)}
      </tr>
    );
  }
}


