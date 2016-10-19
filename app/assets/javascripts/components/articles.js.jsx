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
  imagePicker: function(){
    var images = [
      "https://cdn-images-1.medium.com/fit/t/1600/480/1*WB8XPU_nCfCNrIW1wKT2Og.png",
      "https://cdn-images-1.medium.com/fit/t/1600/480/1*VcnMqhkSm-S1cMhlKmg1Aw.jpeg",
      "https://cdn-images-1.medium.com/fit/t/1600/480/1*wA85qHsxx_ntzVABToMNRA.png",
      "https://cdn-images-1.medium.com/fit/t/1600/480/1*SHP82tvbn1cE9h7NsBK6Wg.gif"
    ]
    var image = images[Math.floor(Math.random()*images.length)];
    return image;
  },
  render: function(){
    return(
      <div>
        <ArticleForm newArticle={this.addArticle}/>
        {this.state.articles.map(function(article){
          return (
            <Article article={article} expanded={false} imgurl={this.imagePicker()}/>
          )
        }.bind(this))}
      </div>
    )
  }
})
