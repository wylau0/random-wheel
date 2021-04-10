import React from 'react';
import './PieContainer.css';
import Pie, { Data } from '../Pie';
import PiePointer from '../PiePointer';
import PieButton from '../PieButton';

interface Props {
    data: Data[];
    onSpinStateUpdate?: (isSpinning: boolean) => void;
}
interface State {
    isRotating: boolean;
    angle: number;
    rotateTime: number;
}

class PieContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            isRotating: false,
            angle: 0,
            rotateTime: 5
        }

        this.onPieButtonClick = this.onPieButtonClick.bind(this);
        this.onPieFinishSpinning = this.onPieFinishSpinning.bind(this);
    }

    public render() {
        return (
            <div className="PieContainer">
                <Pie data={this.props.data} angle={this.state.angle} isRotating={this.state.isRotating} rotateTime={this.state.rotateTime} />
                <PiePointer />
                <PieButton onClick={this.onPieButtonClick} />
            </div>
        );
    }

    private onPieButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (!this.state.isRotating) {
            let time = Math.floor(Math.random() * 5) + 5;
            let angle = Math.floor(Math.random() * 360 * 2) + 360 * 2;

            this.setState({ isRotating: true, angle: angle, rotateTime: time })

            setTimeout(this.onPieFinishSpinning, time * 1000);

            if (this.props.onSpinStateUpdate) this.props.onSpinStateUpdate(true);
        }
    }

    private onPieFinishSpinning() {
        this.setState(prevState => ({ isRotating: false, angle: prevState.angle % 360 }));
        if (this.props.onSpinStateUpdate) this.props.onSpinStateUpdate(false);
    }
}

export default PieContainer;
