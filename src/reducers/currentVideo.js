import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  var newState = {};

  if (action.type === 'CHANGE_VIDEO') {
    newState = action.video;
  } else {
    return state;
  }
  
  return newState;
};

export default currentVideoReducer;
