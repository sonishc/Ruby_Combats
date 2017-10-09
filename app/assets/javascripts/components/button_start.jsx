function ButtonStart(props) {

    return (
      <td>
        <button 
          onClick={ props.changeFightProperty }
          disabled={ props.btnClick } 
          className="btn btn-start" 
        >
        STRIKE
        </button>
      </td>
    )
}
