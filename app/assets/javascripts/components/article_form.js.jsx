var ArticleForm = React.createClass({
  getInitialState: function(){
    return({
      title:'',
      content:'',
      writing: false
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
  toggleWrite: function(){
    if(this.state.writing){
      this.setState({writing: false});
    }else{
      this.setState({writing: true});
    }
  },
  render: function(){
    var writeForm;
    if(this.state.writing){
        writeForm = (
          <form className="article-form" onSubmit={this.handleSubmit}>
            <input id="title" type="text" placeholder="Title Here" name="title" value={this.state.title} onChange={this.handleChange}></input>
            <textarea id="content" type="text" placeholder="Write Content Here" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
            <button id="submit-btn" type="submit">Submit</button>
            <button onClick={this.toggleWrite}>Cancel</button>
          </form>
        )
      }else{
        writeForm = (
          <p onClick={this.toggleWrite}>Write here...</p>
        )
      }
    return(
      <div className="write-form">
        {writeForm}
      </div>
    )
  }
})
