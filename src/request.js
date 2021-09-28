const key = '05f8936bb580ed1df09d6f9b037756a2';

const requests = {
        fetchPopular: `/movie/popular?api_key=${key}&language=en-US&page=1`,
        fetchTrending: `/trending/all/day?api_key=${key}`,
        fetchNowPlaying: `/movie/now_playing?api_key=${key}&language=en-US&page=1`,
        fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US&page=1`,
        fetchTV: `/tv/popular?api_key=${key}&language=en-US&page=1`,
        fetchTVTopRated: `/tv/top_rated?api_key=${key}&language=en-US&page=1`,
        fetchSearch: `/search/multi?api_key=${key}&language=en-US&query=racing&page=1&include_adult=false`,
    }

export default requests;