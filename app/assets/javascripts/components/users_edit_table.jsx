class UsersEditTable extends React.Component {

  user_rows() {
    const users = this.props.users;

    const user_rows = users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <DeleteUserButton user_id={user.id} />
          </td>
        </tr>
      )
    });
    return user_rows;
  }

  render () {


    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
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
