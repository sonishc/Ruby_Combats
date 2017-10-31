class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      urlType:`/assets/${this.props.user_type}.jpg`,
      active: false,
      toggle: false,
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick (img_path) {
    arena.backgroundImage = 'url(' + img_path + ')';
    this.setAttribute('id', 'locationGalleryActive');
  }
  generateLocations (list) {
    const elem = list.map((element) => {
      return(
        <li className='locationGallery' >
          <img src={element.img} alt={element.h3} onClick={(e) => this.handleClick(element.img)}/>
          <h3>{element.h3}</h3>
          <p>{element.p}</p>
        </li>
      );
    })
    return elem;
  }
  render() {

    return (
      <div className="container">
        <div className="wrap">
          <div className="img-wrap">
            <img src={ this.state.urlType } alt={ this.props.user.name } id='warrior' />
          </div>
          <div className='side'>
            <div className="statTable">
              <h1 id='name'><i>{ this.props.user.name }</i></h1>

              <dl className="stats">
                <dt>e-mail:</dt>
                <dd>{ this.props.user.email }</dd>

                <dt>Сlass:</dt>
                <dd>{ this.props.user_type }</dd>

                <dt>Experience:</dt>
                <dd>{ this.props.user.experience }  <meter value={this.props.user.experience} min="0" max="100"></meter></dd>

                <dt>Level:</dt>
                <dd>{ this.props.user.level }</dd>
              </dl>
              <div id='play'>
                <a href="/users/fight" className="btn btn-danger btn-lg">Let&#39;s Fight!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
