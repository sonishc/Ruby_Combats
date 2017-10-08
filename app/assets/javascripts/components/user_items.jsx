class UserItems extends React.Component {
  generate_items(items) {
    const images = items.map((item, index) => {
      return (<img src={`/assets/items/${item.img}`} alt={item.item_name} key={index} />);
    });

    return images;
  }

  render() {
    return (
      <div className="user-items">
        {this.generate_items(this.props.items)}
      </div>
    );
  }
}
