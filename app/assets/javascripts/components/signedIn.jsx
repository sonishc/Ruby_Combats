class SignedIn extends React.Component {
  render(){
    return(
        <div>
          <nav className="nav navbar-nav navbar-right">
              <form action="/users/sign_out" method="DELETE">
                <button type="submit" className="btn btn-info btn-lg">
                  <span className="glyphicon glyphicon-log-out"></span> Log out
                </button>
              </form>  
          </nav>
        </div>
    );
  }
}