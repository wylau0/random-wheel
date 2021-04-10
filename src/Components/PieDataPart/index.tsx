import React from 'react';
import './PieDataPart.css';

interface Props {
    id: number;
    isDisable: boolean;
    title: string;
    ratio: string;
    onChange?: (id: number, type: number, value: string) => void;
    onDelClick?: (id: number) => void;
}

interface State { }

class PieDataPart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onRatioChange = this.onRatioChange.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
    }

    public render() {
        return (
            <li className="PieDataPart">
                <input className="PieDataTitle PieDataInput" type="text" placeholder="Title" disabled={(this.props.isDisable)} value={this.props.title} onChange={this.onTitleChange} />
                <input className="PieDataRatio PieDataInput" type="text" disabled={(this.props.isDisable)} value={this.props.ratio} onChange={this.onRatioChange} />
                <button className="PieDataDel" onClick={this.onDelClick} disabled={(this.props.isDisable)}>-</button>
            </li>
        );
    }

    private onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // this.setState({title: event.target.value});

        if (this.props.onChange) {
            this.props.onChange(this.props.id, 0, event.target.value);
        }
    }

    private onRatioChange(event: React.ChangeEvent<HTMLInputElement>) {
        // this.setState({ratio: event.target.value.replace(/\D/,'')});

        if (this.props.onChange) {
            let value = event.target.value.replace(/\D/, '');
            if (value === '') value = '0';

            this.props.onChange(this.props.id, 1, value);
        }
    }

    private onDelClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.props.onDelClick) {
            this.props.onDelClick(this.props.id);
        }
    }
}

export default PieDataPart;


