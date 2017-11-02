class UserSignout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { redirect: false };

    console.log(props.user);
  }

  initHeaders() {
    const token = document.querySelector("meta[name=csrf-token]").getAttribute('content');
    axios.defaults.headers.common['X-CSRF-Token'] = token
    axios.defaults.headers.common['Accept'] = 'application/json'
  }

  handleSubmit(e) {
      $.ajax({
         url:'/users/sign_out',
         method: 'delete',
       }).done(function(response) {
        console.log('success');
         });
  }

render(){
   return(
       <div>
         <li>
            <a href="#" onClick={this.handleSubmit}>
              <span className="glyphicon glyphicon-log-out"></span> Log out
            </a>
         </li>
       </div>
   );
  }
}
