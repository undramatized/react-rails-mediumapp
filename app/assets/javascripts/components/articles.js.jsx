var ArticlesContainer = React.createClass({
  getInitialState: function(){
    return({
      articles: this.props.articles
    })
  },
  addArticle: function(article){
    articles = this.state.articles.slice();
    articles.unshift(article);
    this.setState({articles: articles});
  },
  render: function(){
    return(
      <div>
        <ArticleForm newArticle={this.addArticle}/>
        {this.state.articles.map(function(article){
          return (
            <div className="article">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          )
        })}
      </div>
    )
  }
})
