import React from 'react';
import DateSelect from './date-select';
import '../App.css'

class Header extends React.Component {
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
                <div className="dash-header">
                    <p className="site-name">Site: { this.props.siteName }</p>
                    <DateSelect onDateSelect={this.handleSetDate} />
                </div>
            )
        }
}

export default Header;