class InventoryImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: null
    }
  }

  handleClick() {
    this.setState((prevState) => {
      return {className: prevState.className ? null : 'activated'}
    });

    this.props.handleClick();
  }

  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} onClick={() => this.handleClick()} className={this.state.className} />
    )
  }
}
