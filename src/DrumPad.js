import React from 'react';

class DrumPad extends React.Component {

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick} id={this.props.buttonId} className="drum-pad btn btn-light">
          <audio id={this.props.audioId} className="clip" src={this.props.src} type="audio/mpeg" /> {this.props.letter}
        </button>
      </React.Fragment>
    );
  }
}

export default DrumPad;