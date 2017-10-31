class Inventory extends React.Component {

  generate_images() {
    const items = this.props.items;
    const images = items.map((item, index) => {
      let inv_items = [];

      for (let i = 0; i < item.count; i++)
        inv_items.push(<InventoryImage src={`/assets/items/${item.img}`} key={index + i} alt={item.item_name} handleClick={() => this.props.handleClick(item)} />)

      return inv_items;
    });

    return images;
  }

  render() {
    if (this.props.items == false)
      return (<h4> No Items in inventory </h4>)

    return (
      <div className="inventory-items">
        {this.generate_images()}
      </div>
    );
  }
}
