class DeleteUserButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.user_id };
  }

  initHeaders() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    axios.defaults.headers.common['X-CSRF-Token'] = token
    axios.defaults.headers.common['Accept'] = 'application/json'
  }

  sendRequest(e) {
    this.initHeaders();
    axios.delete('/users/' + this.state.id).then(response => {
      this.props.updateFunc(response.data);
    });
  }

  render() {

    return (
      <button className="button_to" onClick={() => this.sendRequest()}>Delete</button>
    );
  }
}
