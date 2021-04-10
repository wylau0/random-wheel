import React from 'react';
import './PieData.css';
import { Data } from '../Pie';
import PieDataPart from '../PieDataPart';

interface Props {
    onDataUpdate?: (id: number, type: number, value: string) => void;
    isSpinning: boolean;
    data: Data[];
}
interface State { }

class PieData extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.onPieDataPartChange = this.onPieDataPartChange.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
    }
    public render() {
        console.log(this.props.data.length);
        const children = this.props.data.map((item, i) => (
            <PieDataPart
                id={i} isDisable={this.props.isSpinning}
                title={item.title}
                ratio={item.ratio.toString()}
                onChange={this.onPieDataPartChange}
                onDelClick={this.onDelClick}
            />
        ));

        return (
            <ul className="PieData">
                {children}
            </ul>
        );
    }

    private onPieDataPartChange(id: number, type: number, value: string) {
        if (this.props.onDataUpdate) {
            this.props.onDataUpdate(id, type, value);
        }
    }

    private onDelClick(id: number) {
        if (this.props.onDataUpdate) {
            this.props.onDataUpdate(id, 2, '');
        }
    }
}

export default PieData;