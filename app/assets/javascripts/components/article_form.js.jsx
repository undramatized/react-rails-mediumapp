var ArticleForm = React.createClass({
  getInitialState: function(){
    return({
      title:'',
      content:''
    })
  },
  handleChange: function(e){
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  },
  handleSubmit: function(e){
    e.preventDefault();
    $.post("/articles",{article: this.state}, function(data){
      this.props.newArticle(data);
    }.bind(this));
    this.setState(getInitialState());
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title Here" name="title" value={this.state.title} onChange={this.handleChange}></input>
        <input type="text" placeholder="Write Content Here" name="content" value={this.state.content} onChange={this.handleChange}></input>
        <button type="submit">Submit</button>
  </form>
    )
  }
})
