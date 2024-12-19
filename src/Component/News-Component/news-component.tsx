import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import './news-component.css';

function Newscomponent() {
    interface NewsItem {
        article_id: string;
        image_url: string;
        title: string;
        description: string;
        link: string;
    }

    const [data, setData] = useState<{ results: NewsItem[] }>({ results: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const [totalcount, setTotalcount] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=5b2df248c0cd47fa82a08623a6bdaf39&page=${page + 1}&pageSize=10`);
                const result = await response.json();
                setTotalcount(result.totalResults);
                setData(prevData => ({
                    results: [...prevData.results, ...result.articles]
                }));
                setLoading(false);
                if (result.articles.length === 0) {
                    setHasMore(false);
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } 
                setLoading(false);
            }
        };

        getData();
    }, [page]);

    const fetchMoreData = () => {
        console.log('fetching more data');
        setPage(page + 1);
    };

    if (loading && page === 1) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='news-api'>
            <h1 className="fixed-header">{totalcount} {page }</h1>
            <div className="container-fluid">
                <InfiniteScroll
                    dataLength={500}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="row justify-content-center">
                        {data.results.map((item,index) => (
                            <div className="col-3 carddesigen m-4" key={index}>
                                <div className="card defaultstyle">
                                    <img src={item.image_url} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.link} className="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default Newscomponent;