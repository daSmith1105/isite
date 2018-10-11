import React from 'react';
import DateSelect from './date-select';
import Play from './play';
import Events from './events';
import Snap from './snap';
import '../App.css'

class ActionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: ''
        }
        this.handleSetDate = this.handleSetDate.bind(this);
    }

    handleSetDate(dateVal) {
        this.setState({ date: dateVal }, function() {
        this.props.dateSet(this.state.date)
        })
    }
    

        render() {
            return (
                <div>
                    <DateSelect onDateSelect={this.handleSetDate} />
                    <Play />
                    <Events />
                    <Snap />
                </div>
            )
        }
}

export default ActionContainer;