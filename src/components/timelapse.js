import React from 'react';
import moment from 'moment';
import '../App.css';
 
class Timelapse extends React.Component {
        
    state = {
        startDate: new Date(),
        endDate: new Date(),
        loading: false,
        error: false
    }
 
  onChangeStart = date => {
      if(date > new Date()) {
          console.log('Date is in the future')
      } else {
      this.setState({ 
          startDate: moment(date).format('MM/DD/YY')
        }, function() {
          console.log(this.state.startDate);
      })
    }
}

onChangeEnd = date => {
    if(date > new Date()) {
        console.log('Date is in the future')
    } else {
    this.setState({ endDate: moment(date).format('MM/DD/YY')
      }, function() {
        console.log(this.state.endDate);
    })
  }
}

runSearch(e) {
    e.preventDefault();
    console.log('running search');
}
 
  render() {
    return (
      <div className="timelapse-container">
      {console.log('clicked')}
       <form onSubmit={this.runSearch}>
       <button className="cancel" onClick={this.props.close}>X</button>
            <h1 className="timelapse-heading">Select dates for timelapse video</h1>
            <div>
                <label htmlFor="start-date">Start date:</label>
                <input className="timelapse-input start-date" 
                    type="date" 
                    name="start-date" 
                    value={this.state.startDate} 
                    onChange={this.onChangeStart} />
            </div>
            <div>
                <label htmlFor="start-date">End date:</label>
                <input className="timelapse-input end-date" 
                    type="date" 
                    name="end-date" 
                    value={this.state.endDate}
                    onChange={this.onChangeEnd} />
            </div>
            <button type="submit" className="timelapse-submit-btn">
                    SUBMIT
            </button>
       </form>
      </div>
    );
  }
}

export default Timelapse;