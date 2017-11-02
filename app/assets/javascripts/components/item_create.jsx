class ItemCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: '',
      category: '',
      hierarchy: '',
      hp: '',
      armor: '',
      power: '',
      instinct: '', 
      stamina: '',
      dexterity: '',
      images: this.props.images
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initHeaders() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');

    axios.defaults.headers.common['X-CSRF-Token'] = token
    axios.defaults.headers.common['Accept'] = 'application/json'
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let data = new FormData();

    data.append('item[item_name]', this.state.item_name);
    data.append('item[category]', this.state.category);
    data.append('item[hierarchy]', this.state.hierarchy);
    data.append('item[hp]', this.state.hp);
    data.append('item[armor]', this.state.armor);
    data.append('item[power]', this.state.power);
    data.append('item[instinct]', this.state.instinct);
    data.append('item[stamina]', this.state.stamina);
    data.append('item[dexterity]', this.state.dexterity);
    data.append('item[image]', $('input[type=file]')[0].files[0]);

    $.ajax({
      url: '/items/',
      method: 'POST',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      data: data,
      processData: false,
      contentType: false,
      success: function(response) {
        if (response.error) {
          alert(response.message)
        }
      },
      error: function() {

      }
    });
  }
  
    render(){
    return(
      <div className="wrapper">
       <img src={ this.props.image } className="img-responsive" alt="Picture" />
        <div>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Create Item</legend>
                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item name.."
                        value={this.state.item_namel}
                        onChange={e => this.setState({item_name: e.target.value})}
                        name="item_name"
                        id="item_name"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item category.."
                        value={this.state.category}
                        onChange={e => this.setState({category: e.target.value})}
                        name="category"
                        id="item_category"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item hierarchy.."
                        value={this.state.hierarchy}
                        onChange={e => this.setState({hierarchy: e.target.value})}
                        name="hierarchy"
                        id="item_hierarchy"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item HP.."
                        value={this.state.hp}
                        onChange={e => this.setState({hp: e.target.value})}
                        name="hp"
                        id="item_hp"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item armor.."
                        value={this.state.armor}
                        onChange={e => this.setState({armor: e.target.value})}
                        name="armor"
                        id="item_armor"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item power.."
                        value={this.state.power}
                        onChange={e => this.setState({power: e.target.value})}
                        name="power"
                        id="item_power"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item instinct.."
                        value={this.state.instinct}
                        onChange={e => this.setState({instinct: e.target.value})}
                        name="instinct"
                        id="item_instinct"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item stamina.."
                        value={this.state.stamina}
                        onChange={e => this.setState({stamina: e.target.value})}
                        name="staimina"
                        id="item_stamina"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        placeholder="Enter item dexterity.."
                        value={this.state.dexterity}
                        onChange={e => this.setState({dexterity: e.target.value})}
                        name="dexterity"
                        id="item_dexterity"
                        required/>
                </div>

                <div className="form-group">
                  <input className="form-control"
                        type="file"
                        onChange={e => this.setState({image: e.target.value})}
                        id="item_content"
                        required/>
                </div>

                 <button
                       type="submit"
                       className="btn btn-success"
                       value="Submit">Submit
                 </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
