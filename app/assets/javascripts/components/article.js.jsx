var Article = React.createClass({
  getInitialState: function(){
    return({
      expanded: this.props.expanded
    })
  },
  articlePath: function(id){
    return "/articles/"+id
  },
  shortener: function(text, expanded){
    if(expanded){
      return text;
    }else{
      return text.slice(0,100)+"..."
    }
  },
  toggleExpand: function(){
    if(this.state.expanded){
      this.setState({expanded: false});
    }else{
      this.setState({expanded: true});
    }
  },
  render: function(){
    var viewbutton = function(){
      if(this.state.expanded){
        return (<button onClick={this.toggleExpand}>View Less</button>);
      }else{
        return (<button onClick={this.toggleExpand}>View More</button>);
      }
    }.bind(this);
    return(
      <div className="article">
        <a href={this.articlePath(this.props.article.id)} >
          <h3>{this.props.article.title}</h3>
        </a>
        <img src={this.props.imgurl}></img>
        <p>{this.shortener(this.props.article.content,this.state.expanded)}</p>
        {viewbutton()}
      </div>
    )
  }
})
