var SignUpForm = React.createClass({
  getInitialState: function(){
    return(
      {
        name: '',
        description: '',
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
    $.post("/users",{user: this.state}, function(data){
      alert("Thank you for signing up" + data)
    });
  },
  render: function(){
    return(
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange}></input>
        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
        <textarea type="text" name="description" placeholder="A Short Description" value={this.state.description} onChange={this.handleChange}></textarea>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
})
