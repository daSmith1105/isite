import React from 'react';
import '../App.css';
 
class Timelapse extends React.Component {
    constructor(props) {
        super();

        this.state = {
            startDate: '',
            endDate: '',
            loading: false,
            error: false
        }
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.runSearch = this.runSearch.bind(this);
    }

  onChangeStart(e) {
      e.preventDefault();
      let date = e.target.value;
      console.log('start date changed');
      if(date > new Date()) {
          console.log('Date is in the future')
      } else {
        this.setState({ startDate: date},
            function() { console.log(this.state)})
      }
    }


onChangeEnd(e) {
    e.preventDefault();
    let date = e.target.value;
    console.log('end date changed');
    if(date > new Date()) {
        console.log('Date is in the future')
    } else {
        this.setState({ endDate: date},
            function() { console.log(this.state)})
    }
  }


runSearch(e) {
    e.preventDefault();
    console.log(new Date())
    if (this.state.startDate > this.state.endDate) {
        console.log('End date is before Start date!'); 
    } else if ( (this.state.startDate || this.state.endDate) > new Date() ) {
        console.log('Start or end date is too far in future!');
    } else {
    console.log('running search');
    console.log(this.state);
    }
}
 
  render() {
    return (
    <div className="timelapse-wrapper">
      <div className="timelapse-container">
       <form onSubmit={this.runSearch}>
       <button className="cancel" onClick={this.props.close}><span role="img" aria-label="close">&#x274C;</span></button>
            <h1 className="timelapse-heading">Select dates for timelapse video</h1>
            {((this.state.startDate > this.state.endDate) & this.state.endDate !== '') ? <p className="date-error">End date is before Start date!</p> : '' }
            <div className="timelapse-start">
                <label htmlFor="start-date">Start date:</label>
                <input className="timelapse-input start-date" 
                    type="date" 
                    name="start-date" 
                    value={this.state.startDate} 
                    onChange={this.onChangeStart}
                    required />
            </div>
            <div className="timelapse-end">
                <label htmlFor="start-date">End date:</label>
                <input className="timelapse-input end-date" 
                    type="date" 
                    name="end-date" 
                    value={this.state.endDate}
                    onChange={this.onChangeEnd}
                    required />
            </div>
            <button type="submit" className="timelapse-submit-btn">
                    SUBMIT
            </button>
       </form>
      </div>
      </div>
    );
  }
}

export default Timelapse;