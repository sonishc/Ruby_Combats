class Navbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      user:this.props.user
      };
  }

  show_links(links){
    if (this.state.user && (this.state.user.role_id < 4)){
      links = [links[0], links[2], links[3], links[4], links[5]];
      return links;
    } else if (this.state.user && (this.state.user.role_id == 4)){
      links = [links[0], links[3], links[4], links[5]];
      return links;
    } else {
      links = [links[0], links[1]];
      return links;
    }
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                { generate_spans(NAVBAR_SPANS) }
              </button>
              <a className="navbar-brand" href={ NAVBAR_LINKS.urlRoot }>
                <img src={ SITE_LOGO_IMG } alt="Fight Club" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav pull-right">
                { this.show_links(generate_links(NAVBAR_LINKS))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
