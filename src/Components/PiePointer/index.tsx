import React from 'react';
import './PiePointer.css';

interface Props {}
interface State {}

class PiePointer extends React.Component<Props, State> {
    public render() {
        return (
            <div className="PiePointer">
                <div className="triangle"></div>
            </div>
        );
    }
}

export default PiePointer;
