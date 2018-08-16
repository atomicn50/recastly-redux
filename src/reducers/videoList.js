import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  let newState = {};
  
  if (action.type === 'CHANGE_VIDEO_LIST') {
    newState = action.videos;
  } else {
    return state;
  }
  
  return newState;
};

export default videoListReducer;
