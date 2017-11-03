class LocationPage extends React.Component {
  render() {
    return (
      <div id='location-page'>
        <div className='col-md-6 left-side'>
          <div className='description-image'>
            <img
              src={imgUrl[this.props.user]}
              className='img-responsive desc-image'
              alt='location image'/>
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
        <div className='col-md-6 right-side'>
        <div className='chat'>
            <FayeMessages name={this.props.name} users={this.props.users} />
        </div>
          <div className='nav-panel'>
            <a className='btn btn-danger nav-button' href='/location'>Back</a>
            <a className='btn btn-danger nav-button' href='/users/fight'>Fight</a>
          </div>
        </div>
      </div>
    );
  }
}
