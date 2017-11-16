class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (locationName, step) {
    if(this.state.level >= step) {
      $.ajax({
        url:'/location',
        method:"POST",
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data:{
          location: locationName,
          level: step
        },
        success:function(response) {
          if (response.error) {
            alert(response.message);
          }
        }
      });
    } else {
      alert(`Your level is ${this.state.level}, you need to be at least on ${step}!`);
    }
  }

  generateLocations(list) {
    const locations = list.map(location => {
      return(
        <li className='location-gallery' name={location.title}>
          <div className={this.state.level < location.step ? 'blocked-location' : 'location-content'} onClick={e => this.handleClick(location.title, location.step)}>
            <img className='location-img' src={location.img} alt={location.title} />
            <h3 className='title'>{location.title}</h3>
            <p className='description'>{location.description}</p>
          </div>
        </li>
      );
    })

    return locations;
  }

  render() {
    return (
      <div id="location" >
        <div className="wrapper">
          <header id='choose-cite'>
            <h1 id='cite'>Choose your own arena to fight!</h1>
          </header>
          <ul id='location-wrap'>
            { this.generateLocations(LIST_TO_GENERATE) }
          </ul>
        </div>
      </div>
    );
  }
}
