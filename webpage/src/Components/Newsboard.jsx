import { useEffect } from "react";
import { useState } from "react";



const Newsboard = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`

    fetch(url).then(response=>response.json()).then(data=> setArticles (data.articles));


  },[])



  return (
    <div>
      <h2 className="text-center">LATEST <span className=" badge bg-danger">NEWS</span></h2>
    {articles.map((news,index)=>{

      return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>;
    })}
    </div>
  )
}

export default Newsboard