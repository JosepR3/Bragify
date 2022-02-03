import TracksControls from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { increaseTracksTime } from "../../actions/trackActions";

// const mapStateToProps = state => {
//   return {
//     trackName: state.tracksReducer.trackDetails
//       ? state.tracksReducer.trackDetails.name
//       : "",
//     artistName: state.tracksReducer.trackDetails
//       ? state.tracksReducer.trackDetails.artists[0].name
//       : "",
//     trackPlaying: state.tracksReducer.trackPlaying,
//     timeElapsed: state.tracksReducer.timeElapsed,
//     trackPaused: state.tracksReducer.trackPaused,
//     trackDetails: state.tracksReducer.trackDetails,
//     tracks: state.tracksReducer.tracks
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       increaseTracksTime
//     },
//     dispatch
//   );
// };

export default TracksControls;

// connect(mapStateToProps, mapDispatchToProps)
