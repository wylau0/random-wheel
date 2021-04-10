import React from 'react';
import './App.css';
import PieContainer from './Components/PieContainer';
import PieDataContainer from './Components/PieDataContainer';
import { Data } from './Components/Pie';

interface Props { }
interface State {
  data: Data[];
  isSpinning: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      isSpinning: false
    }

    this.onPieDataUpdate = this.onPieDataUpdate.bind(this);
    this.onSpinStateUpdate = this.onSpinStateUpdate.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <div className="Head">
          <div className="MenuButton">☰</div>
          <div className="MenuVersion">v0.1.0</div>
        </div>
        <div className="Body">
        <div className="PieWrapper">
            <PieContainer data={this.state.data} onSpinStateUpdate={this.onSpinStateUpdate} />
          </div>
          <PieDataContainer onDataUpdate={this.onPieDataUpdate} isSpinning={this.state.isSpinning} />
        </div>
      </div>
    );
  }

  private onPieDataUpdate(data: Data[]) {
    this.setState({ data: data });
  }

  private onSpinStateUpdate(isSpinning: boolean) {
    this.setState({ isSpinning: isSpinning });
  }
}

export default App;