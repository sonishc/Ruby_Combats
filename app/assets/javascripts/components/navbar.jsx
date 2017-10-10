class Navbar extends React.Component {
  constructor() {
   super();
  }

  generate_spans(span_list) {
    const spans = span_list.map((name, index) => {
      return (<span key={index} className={name}></span>);
    });

    return spans;
  }

  generate_links(links_list) {
    const links = links_list.map((value, index) => {
      return  (<li key={index}>
                <a href={value.url} >{value.title}</a>
              </li>);
    });

    return links;
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                { this.generate_spans(NAVBAR_SPANS) }
              </button>
              <a className="navbar-brand" href={ NAVBAR_LINKS.urlRoot }>
                <img src={ SITE_LOGO_IMG } alt="Fight Club" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav pull-right">
                { this.generate_links(NAVBAR_LINKS) }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
