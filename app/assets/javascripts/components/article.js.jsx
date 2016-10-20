var Article = React.createClass({
  getInitialState: function(){
    var userpath = "users/"+this.props.article.user_id
    $.get(userpath, function(user){
      this.setState({user: user})
    }.bind(this));
    return({
      expanded: this.props.expanded,
      user: {}
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
  formatDate: function(date){
    return moment(date).format("MMM Do YYYY")
  },
  readTime: function(text){
    var readtime = Math.ceil(text.length/1000)
    return ""+readtime+" min read";
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
        <div className="row">
          <div className="one column">
            <img src="http://digventures.com/barrowed-time/wp-content/uploads/placeholder-man-grid-240x268.png"/>
          </div>
          <div className="eleven columns">
            <p id="author">{this.state.user.name}</p>
            <p id="author-desc">{this.state.user.description}</p>
          </div>
        </div>
        <p className="article-info">{this.formatDate(this.props.article.created_at)} | {this.readTime(this.props.article.content)}</p>
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
