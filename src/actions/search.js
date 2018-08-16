import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {

  return _.debounce((dispatch) => (
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));  
    })
  ), 500);
}

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