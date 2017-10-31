class Location extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (locationName) {
    $.ajax({
      url:'/location',
      method:"POST",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data:{
        location: locationName
      },
      success:function(response) {
        if (response.error) {
          alert(response.message);
        }
      }
    });
  }

  generateLocations(list) {
    const locations = list.map(location => {
      return(
        <li className='location-gallery' name={location.title}>
          <div className='location-content' onClick={e => this.handleClick(location.title)}>
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
