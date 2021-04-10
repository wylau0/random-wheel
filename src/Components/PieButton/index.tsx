import React from 'react';
import './PieButton.css';

interface Props {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class PieButton extends React.Component<Props> {
    public render() {
        return (
            <div className="PieButtonContainer">
                <button className="PieButton" onClick={this.props.onClick}></button>
                <div className="PieButtonOutline"></div>
            </div>
        );
    }
}

export default PieButton;