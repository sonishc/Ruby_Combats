class UsersEditTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {users: this.props.users }
    this.updateList = this.updateList.bind(this);
  }

  updateList(users) {
    this.setState({users: users});
  }

  user_rows() {
    const current_user = this.props.current_user;
    const users = this.state.users;
    const roles = this.props.roles;

    const user_rows = users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <SelectItems items={roles} user={user} user_id={user.id} current_user={current_user} />
          </td>
          <td>
            <DeleteUserButton user_id={user.id} updateFunc={this.updateList} />
          </td>
        </tr>
      )
    });
    return user_rows;
  }

  render () {
    return (
      <table className="table table-responsive table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Set Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.user_rows()}
        </tbody>
      </table>
    );
  }
}
