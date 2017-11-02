class UserSignout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    $.ajax({
        url: '/users/sign_out',
        type: 'DELETE',
        success: function(result) {
            console.log('Success!');
        }
    });
}

render(){
   return(
       <div>
         <li>
            <a href="#" onClick={this.handleSubmit}>
              <span className="glyphicon glyphicon-log-out"></span> Sign out
            </a>
         </li>
       </div>
   );
  }
}
