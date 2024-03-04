import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import MySpinner from "./MySpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    const pageTitle =
      props.category !== "general"
        ? `${capitalizeFirstLetter(props.category)} - News Horizon`
        : "News Horizon - Get your daily dose of news free!";

    document.title = pageTitle;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category, props.country]);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${
      props.apiKey
    }&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h2 className="text-center my-4" style={props.mode === "light" ? { color: "black" } : { color: "white" }}>
        News Horizon - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <MySpinner />}
      <div className="row">
        {!loading && articles && (
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={articles.length}
            next={() => {
              fetchData();
            }}
            hasMore={articles.length !== totalResults}
            loader={<MySpinner />}
            endMessage={
              <h5 className={`text-center my-2 ${props.mode === "light" ? "text-secondary" : "text-white"}`}>
                yay! you have seen it all.
              </h5>
            }
          >
            <div className="container py-2">
              <div className="row">
                {articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element?.url}>
                      <NewsItem
                        mode={props.mode}
                        title={element?.title ? element?.title : ""}
                        description={element?.description ? element?.description : ""}
                        imageUrl={element?.urlToImage}
                        newsUrl={element?.url}
                        author={element?.author}
                        date={element?.publishedAt}
                        source={element?.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
export default News;
