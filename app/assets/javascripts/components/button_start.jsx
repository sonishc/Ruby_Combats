function ButtonStart(props) {

    return (
      <div className="col-md-3">
        <button
          onClick={ props.startFight }
          disabled={ props.btnClick }
          className="btn btn-start"
        >
        { I18n.t ("strike") }
        </button>
      </div>
    )
}
