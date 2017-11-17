class LogWindow extends React.Component {
  generateLogs(values){
      const renObjData = values.map((value,index) => {
        return  (<p key={index}>{value.name} - {value.data}</p>);
      });
    return renObjData;
  }
  render () {
    return (
      <div className="col-md-3 pull-right log">
        <div className="row">
          <h4>Logs</h4>
          {this.generateLogs(this.props.logs)}
        </div>
      </div>
    )
  }
}
