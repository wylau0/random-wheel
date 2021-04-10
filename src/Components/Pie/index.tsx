import React from 'react';
import './Pie.css';

interface Props {
    data: Data[];
    isRotating: boolean;
    angle: number;
    rotateTime: number;
}
interface State {
}
export interface Data { title: string; ratio: number }

class Pie extends React.Component<Props, State> {
    public render() {
        const background = this.getBackground(this.props.data);
        const angles = this.getAngles(this.props.data);
        const children = this.props.data.map(function (item, i) {
            return (
                <div
                    className='pieceTitle'
                    style={{ transform: 'rotate(' + angles[i] + 'deg) translate(-50%, 6%)' }}
                >{item.title}</div>
            );
        });

        return (
            <div
                className="Pie"
                style={{ background: background, transform: 'rotate(' + this.props.angle + 'deg)', transition: this.props.isRotating ? 'transform ' + this.props.rotateTime + 's' : 'none' }}>
                {children}
            </div>
        );
    }

    private getBackground(data?: Data[]): string {
        if (data === undefined)
            return 'red';

        const angle = 360;
        const colors = ['#F29E4C', '#F1C453', '#EFEA5A', '#B9E769', '#83E377', '#16DB93', '#0DB39E', '#048BA8', '#2C699A', '#54478C'];

        let currAngle = 0;
        let totalRatio = data.reduce((a, b) => a + b.ratio, 0);
        let returnString = 'conic-gradient(';
        for (let i = 0; i < data.length; i++) {
            let nextAngle = currAngle + (angle / totalRatio) * data[i].ratio;
            if (i !== 0) returnString += ', ';
            returnString += colors[i] + ' ' + currAngle + 'deg ' + nextAngle + 'deg';
            currAngle = nextAngle;
        }

        return returnString;
    };

    private getAngles(data?: Data[]): number[] {
        if (data === undefined)
            return [360];

        const circleAngle = 360;
        let angleSum = 0;
        let totalRatio = data.reduce((a, b) => a + b.ratio, 0);
        let returnAngles: number[] = [];
        for (let i = 0; i < data.length; i++) {
            let _result = angleSum + (circleAngle / totalRatio) * data[i].ratio / 2;
            angleSum += (circleAngle / totalRatio) * data[i].ratio;
            returnAngles.push(_result);
        }

        return returnAngles;
    };
}

export default Pie;
