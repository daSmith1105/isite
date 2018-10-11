import React from 'react';
import DatePicker from 'react-date-picker';
 
class DateSelect  extends React.Component {
        
    state = {
        date: new Date(),
    }
 
  onChange = date => {
      this.setState({ date }, function() {
          this.props.onDateSelect(date);
      })
    }
 
  render() {
    return (
      <div className="date-picker">
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DateSelect;