var LoginForm = React.createClass({
  getInitialState: function(){
    return(
      {
        email:'',
        password: ''
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
      alert("You just logged in", data)
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="email" value={this.state.email} type="text" onChange={this.handleChange}></input>
        <input name="password" value={this.state.password} type="password" onChange={this.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
});
