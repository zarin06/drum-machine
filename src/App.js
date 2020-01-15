import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

class App extends React.Component {
  state = {
    buttonName: 'Tune name'
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  onKeyPressed = (e) => {
    const key = String.fromCharCode(e.keyCode);

    if(key==='Q' || key==='W' || key==='E' || key==='A' || key==='S' || key==='D' || key==='Z' || key==='X' || key==='C') {
      switch(key) {
        case 'Q':
          this.setState({ buttonName: 'heater-1' });
          break;
        case 'W':
          this.setState({ buttonName: 'heater-2' });
          break;
        case 'E':
          this.setState({ buttonName: 'heater-3' });
          break;
        case 'A':
          this.setState({ buttonName: 'heater-4' });
          break;
        case 'S':
          this.setState({ buttonName: 'heater-6' });
          break;
        case 'D':
          this.setState({ buttonName: 'open-hh' });
          break;
        case 'Z':
          this.setState({ buttonName: 'kick-n-hat' });
          break;
        case 'X':
          this.setState({ buttonName: 'kick' });
          break;
        case 'C':
          this.setState({ buttonName: 'closed-hh' });
          break;
        default:
      }
      document.querySelector('#'+key).play();
    }
  }

  onQClick = (id, buttonName) => {
    document.querySelector('#'+id).play();
    this.setState({ buttonName: buttonName })
  }

  render() {
    return (
      <div className="bg">
        <div className="container">
          <div id="drum-machine">
            <div className="row" id="display">
              <div className="col-md-8">
                <div className="row buttonRow">
                  <DrumPad onClick={()=>this.onQClick('Q', 'heater-1')} buttonId="heater-1" audioId="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" letter="Q" />
                  <DrumPad onClick={()=>this.onQClick('W', "heater-2")} buttonId="heater-2" audioId="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" letter="W" />
                  <DrumPad onClick={()=>this.onQClick('E', "heater-3")} buttonId="heater-3" audioId="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" letter="E" />
                </div>                
                <div className="row buttonRow">
                  <DrumPad onClick={()=>this.onQClick('A', "heater-4")} buttonId="heater-4" audioId="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" letter="A" />
                  <DrumPad onClick={()=>this.onQClick('S', "heater-6")} buttonId="heater-6" audioId="S" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' letter="S" />
                  <DrumPad onClick={()=>this.onQClick('D', "open-hh")} buttonId="open-hh" audioId="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" letter="D" />
                </div> 
                <div className="row buttonRow">
                  <DrumPad onClick={()=>this.onQClick('Z', "kick-n-hat")} buttonId="kick-n-hat" audioId="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" letter="Z" />
                  <DrumPad onClick={()=>this.onQClick('X', "kick")} buttonId="kick" audioId="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" letter="X" />
                  <DrumPad onClick={()=>this.onQClick('C', "closed-hh")} buttonId="closed-hh" audioId="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" letter="C" />
                </div> 
              </div>
              <div className="col-md-4">
                <p className="text-center"><i class="fas fa-drum fa-2x"></i>&nbsp; &nbsp; <em>Beat</em> your favourite song</p>
                <div id="text"><i class="fas fa-music"></i>&nbsp; &nbsp;{this.state.buttonName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;