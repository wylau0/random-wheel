import React from 'react';
import './PieDataContainer.css';
import { Data } from '../Pie';
import PieData from '../PieData';

interface Props {
    onDataUpdate?: (data: Data[]) => void;
    isSpinning: boolean;
}
interface State {
    data: Data[]
}

class PieDataContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: [
                { title: 'Yes', ratio: 2 },
                { title: 'No', ratio: 2 },
                { title: 'Maybe', ratio: 1 },
            ]
        }

        this.onPieDataPartChange = this.onPieDataPartChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);

        if (this.props.onDataUpdate) {
            this.props.onDataUpdate(this.state.data);
        }
    }
    public render() {
        return (
            <div className="PieDataContainer">
                <PieData isSpinning={this.props.isSpinning} onDataUpdate={this.onPieDataPartChange} data={this.state.data} />
                <button className="PieDataAdd" disabled={this.props.isSpinning} onClick={this.onAddClick}>+</button>
            </div>
        );
    }

    private onPieDataPartChange(id: number, type: number, value: string) {
        this.setState(prevState => {
            let data = [...prevState.data];
            if (type === 0) prevState.data[id].title = value;
            else if (type === 1) prevState.data[id].ratio = parseInt(value);
            else if (type === 2) data.splice(id, 1);

            if (this.props.onDataUpdate) {
                this.props.onDataUpdate(data);
            }
            return { data: data };
        });
    }

    private onAddClick() {
        this.setState(prevState => {
            let data = [...prevState.data];
            data.push({ title: '', ratio: 1 })

            if (this.props.onDataUpdate) {
                this.props.onDataUpdate(data);
            }

            return { data: data };
        });
    }
}

export default PieDataContainer;