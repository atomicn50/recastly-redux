import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  return () => (
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, changeVideoList)
  )
};

export default handleVideoSearch;


// getYouTubeVideos(query) {
//     var options = {
//       key: this.props.API_KEY,
//       query: query
//     };

//     this.props.searchYouTube(options, (videos) =>
//       this.setState({
//         videos: videos,
//         currentVideo: videos[0]
//       })