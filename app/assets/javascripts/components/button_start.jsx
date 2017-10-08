function ButtonStart(props) {

    return (
      <div className="col-md-3">
        <button 
          onClick={ props.changeFightProperty }
          disabled={ props.btnClick } 
          className="btn btn-start" 
        >
<<<<<<< HEAD
        { I18n.t ("strike") }
=======
        STRIKE
>>>>>>> Delete unused files
        </button>
      </div>
    )
}
