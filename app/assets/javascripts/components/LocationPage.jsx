class LocationPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      user: this.props.user
    }
  }
  handleClick(location) {
    arena.backgroundImage = 'url(' + imgUrl[location] + ')';
  }
  render() {
    return (
      <div id="location-page">
        <div className='col-md-9 left-side'>
          <div className='description-image'>
            <img src={imgUrl[this.state.user]} className='img-responsive desc-image' alt='location image'/>
          </div>
          <div className='description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus iure illo aliquam magnam, odio suscipit
              recusandae beatae quos quam perferendis ullam ipsa
              deleniti temporibus reiciendis tempora, fuga praesentium aliquid,
              repellat in necessitatibus itaque accusamus voluptas! Excepturi ducimus
            </p>
          </div>
        </div>
        <div className='col-md-3 right-side'>
          <aside className='chat'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus iure illo aliquam magnam, odio suscipit
              recusandae beatae quos quam perferendis ullam ipsa ullam ipsa
              deleniti temporibus reiciendis tempora, fuga praesentium aliquid,
              repellat in necessitatibus itaque accusamus voluptas! Excepturi ducimus
          </aside>
          <div className='nav-panel'>
            <a className='btn btn-danger nav-button' href='/location'>Back</a>
            <a className='btn btn-danger nav-button' onClick={e => this.handleClick(this.state.user)} href='/users/fight'>Fight</a>
          </div>
        </div>
      </div>
    );
  }
}
