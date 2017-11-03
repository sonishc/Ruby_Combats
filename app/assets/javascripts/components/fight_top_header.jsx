function FightTopHeader(props) {

  let splash = props.status == 'waiting' ? (<div className="splash">Waiting for partner to connect....</div>) : '';
  return (
    <div className="row head-game">
      {splash}
      <div className="col-md-3 center">{props.user}</div>
      <div className="col-md-6 center">{props.status}</div>
      <div className="col-md-3 center">{props.enemy}</div>
    </div>
  );
}
