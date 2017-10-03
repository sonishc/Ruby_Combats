class DeleteUserButton extends React.Component {
  render () {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    return (
      <form className="button_to" method="post" action={'/users/' + this.props.user_id}>
        <input name="_method" value="delete" type="hidden"/>
        <input data-confirm="You sure?" value="Delete" type="submit"/>
        <input name="authenticity_token" value={token} type="hidden"/>
      </form>
    )
  }
}
