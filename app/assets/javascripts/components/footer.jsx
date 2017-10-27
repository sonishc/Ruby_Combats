class Footer extends React.Component {
  constructor() {
   super();
  }

  render() {

    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-right">
              &copy; 2017, { I18n.t ("footer.mark") }
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
