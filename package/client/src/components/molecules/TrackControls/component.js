import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './TrackControls.css';

class TrackControls extends Component {

  state = {
    timeElapsed: this.props.timeElapsed
  };

  // componentWillReceiveProps(nextProps) {

  //   if (!nextProps.trackPlaying) {
  //     clearInterval(this.state.intervalId);
  //   }

  //   if (nextProps.trackPlaying && nextProps.timeElapsed === 0) {
  //     clearInterval(this.state.intervalId);
  //     this.calculateTime();
  //   }

  //   this.setState({
  //     timeElapsed: nextProps.timeElapsed
  //   });

  // }

  // calculateTime() {

  //   const intervalId = setInterval(() => {
  //     if (this.state.timeElapsed === 30) {
  //       clearInterval(this.state.intervalId);
  //       this.props.stopTrack();
  //     } else if (!this.props.trackPaused) {
  //       this.props.increaseTracksTime(this.state.timeElapsed + 1);
  //     }
  //   }, 1000);

  //   this.setState({
  //     intervalId: intervalId
  //   });

  // }

  // getTracksIndex = () => {
  //   const { tracks, trackDetails } = this.props;
  //   const currentIndex = tracks.map((track, index) => {
  //     if (track.track === trackDetails) {
  //       return index;
  //     } else {
  //       return undefined;
  //     }
  //   }).filter(item => {
  //     return item !== undefined;
  //   })[0];

  //   return currentIndex;
  // }

  // nextTracks = () => {
  //   const { tracks, audioControl } = this.props;
  //   let currentIndex = this.getTracksIndex();
  //   currentIndex === tracks.length - 1 ? audioControl(tracks[0]) : audioControl(tracks[currentIndex + 1]);
  // }

  // prevTracks = () => {
  //   const { tracks, audioControl } = this.props;
  //   let currentIndex = this.getTracksIndex();
  //   currentIndex === 0 ? audioControl(tracks[tracks.length - 1]) : audioControl(tracks[currentIndex - 1]);
  // }

  render() {
    const showPlay = this.props.trackPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';

    return (
      <div className='track-player-container'>

        <div className='track-details'>
          <p className='track-name'>{this.props.trackName}</p>
          <p className='artist-name'>{this.props.artistName}</p>
        </div>

        <div className='track-controls'>

          <div onClick={this.prevTrack} className='reverse-track'>
            <i className="fa fa-step-backward reverse" aria-hidden="true" />
          </div>

          <div className='play-btn'>
            <i onClick={!this.props.trackPaused ? this.props.pauseTrack : this.props.resumeTrack} className={"fa play-btn" + showPlay} aria-hidden="true" />
          </div>

          <div onClick={this.nextTrack} className='next-track'>
            <i className="fa fa-step-forward forward" aria-hidden="true" />
          </div>

        </div>

        <div className='track-progress-container'>
          {/* <p className='timer-start'>{moment().minutes(0).second(this.state.timeElapsed).format('m:ss')}</p> */}
          <div className='track-progress'>
            <div style={{ width: this.state.timeElapsed * 16.5 }} className='track-expired' />
          </div>
          {/* <p className='timer-end'>{moment().minutes(0).second(30 - this.state.timeElapsed).format('m:ss')}</p> */}
        </div>

      </div>
    );
  }
}

TrackControls.propTypes = {
  timeElapsed: PropTypes.number,
  trackPlaying: PropTypes.bool,
  trackPaused: PropTypes.bool,
  trackName: PropTypes.string,
  artistName: PropTypes.string,
  stopTrack: PropTypes.func,
  resumeTrack: PropTypes.func,
  increaseTrackTime: PropTypes.func,
  pauseTrack: PropTypes.func,
  tracks: PropTypes.array,
  trackDetails: PropTypes.object,
  audioControl: PropTypes.func
};

export default TrackControls;
