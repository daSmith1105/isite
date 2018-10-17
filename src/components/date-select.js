import React from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import '../App.css';
 
class DateSelect extends React.Component {
        
    state = {
        date: new Date(),
    }
 
  onChange = date => {
      if(date > new Date()) {
          console.log('Date is in the future')
      } else {
      this.setState({ date }, function() {
          this.props.onDateSelect(moment(date).format('MM/DD/YY'));
      })
    }
}
 
  render() {
    return (
      <div className="date-picker">
        <DatePicker
        orientation="bottom"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DateSelect;