var LoginForm = React.createClass({
  getInitialState: function(){
    return(
      {
        email:'',
        password: '',
        user: this.props.user,
        loggingIn: false,
        dropdown: false
      }
    )
  },
  handleChange: function(e){
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  },
  handleSubmit: function(e){
    e.preventDefault();
    $.post("/login",{user: this.state}, function(data){
      this.setState({user: data});
      alert("You have logged in as "+data.name);
    }.bind(this));
  },
  toggleLogin: function(){
    this.setState({loggingIn: true});
  },
  toggleDropdown: function(){
    if(this.state.dropdown){
      this.setState({dropdown:false})
    }else{
      this.setState({dropdown:true})
    }
  },
  render: function(){
    if(this.state.user){
      var dropdown = function(){
        if(this.state.dropdown){
          return "dropdown"
        }else{
          return "dropdown hide"
        }
      }.bind(this)
      return(
        <div>
          <button onClick={this.toggleDropdown}>{this.state.user.name}</button>
          <div className={dropdown()}>
            <ul>
              <li><a href="#">My Posts</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </div>
      )
    }else{
      if(this.state.loggingIn){
        return(
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input name="email" value={this.state.email} type="text" onChange={this.handleChange}></input>
            <input name="password" value={this.state.password} type="password" onChange={this.handleChange}></input>
            <button type="submit">Login</button>
          </form>
        )
      }else{
        return(
          <div>
            <button onClick={this.toggleLogin}>Login</button>
            <a className="button button-primary" href="/signup">Sign Up</a>
          </div>
        )
      }
    }
  }
});
