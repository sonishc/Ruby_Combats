class ItemsEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items, 
      images: this.props.images,
      item: this.props.item
    }
    this.updateList = this.updateList.bind(this);
  }
  updateList(val) {
    this.setState(val);
  }

  generate_tags(Tag, fields) {
    const ths = fields.map((name, index) => {
      return <Tag key={index}>{name}</Tag>;
    });

    return ths;
  }

  item_values(item) {
    let image;
    const images = this.state.images.map((image, index) => {
      image = <img src={image} key={index} className="img-responsive" />;
    });
    const values = [image, item.item_name, item.category, item.hierarchy, item.hp, item.armor, 
                    item.power, item.instinct, item.stamina, item.dexterity];

    let rows = this.generate_tags('td', values);

    return [
      rows,
    ];
  }

  item_rows() {
    const items = this.state.items;

    const item_rows = items.map((item) => {
      return (
        <tr key={item.id}>
          {this.item_values(item)}
        </tr>
      )
    });
    return item_rows;
  }

  render () {
    return (
      <div>
      <ItemCreate updateFunc={this.updateList} />
      <table className="table table-responsive table-hover">
        <thead>
          <tr>
            {this.generate_tags('th', constants.ITEMS_LIST_HEADERS)}
          </tr>
        </thead>
        <tbody>
          {this.item_rows()}
        </tbody>
      </table>
      </div>
    );
  }
}
