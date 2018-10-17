import React from 'react';
import moment from 'moment';
import '../App.css';
 
class Timelapse extends React.Component {
    constructor(props) {
        super();

        this.state = {
            imgArr: [],
            range: "Today",
            submitted: false,
            loading: false,
            error: false
        }
        this.handleRangeSelect = this.handleRangeSelect.bind(this);
        this.runSearch = this.runSearch.bind(this);
        this.play = this.play.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

  handleRangeSelect(e) {
      e.preventDefault();
      let range = e.target.value;
      this.setState({ range })
    }

    fetchToday() {
        this.setState({
            loading: true,
            error: false
        });
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let currentSite = `https://${this.props.siteName}.dividia.net/`;
        let today = moment(new Date()).format('MM/DD/YY');
        fetch(`${proxy}${currentSite}ajax.php?action=getEvents&date=${today}`)
        .then( response => {
              if (response.status !== 200) {
                console.log('Error. Status Code: ' + response.status);
                return;
              }
              response.json().then(data => {
                  let images = data.filter(d => d.sType==="STILL");
                  this.setState({
                     imgArr: images,
                    }, function() {
                    console.log(this.state)
                    })
                })
          .catch(err => {
            console.log('Fetch Error: ', err);
                });
            })
    }


runSearch(e) {
    e.preventDefault();
    let range = this.state.range;
    switch(range) {
        case 'Today':
            console.log('Today selected');
            this.fetchToday();
            this.setState({ submitted: true });
            break;
        case 'This Week':
            console.log('This Week Selected');
            break;
        case 'This Month':
            console.log('This Month selected');
            break;
        case 'From Begining':
            console.log('From Begining selected');
            break;
        default:
            console.log('Today selected');
    }
}
    play() {
        let arr = this.state.imgArr;
        let site = this.props.siteName
        let offset = 0;
        arr.forEach(image => {
            setTimeout (function() { 
                let img = `https://${site}.dividia.net/${image.sImage}`;
                let target = document.getElementById('timelapse-img');
                console.log('image: ' + image.bID)
                target.src = img;
            }, offset += 250);
        })
    }

    closeModal() {
        this.setState({ submitted: false })
    }

   
  

 
  render() {

    return (
    <div className="timelapse-wrapper">
    {!this.state.submitted ? 
      <div className="timelapse-container">
        <form onSubmit={this.runSearch}>
                <button className="cancel" onClick={this.props.close}><span role="img" aria-label="cached">&#x274C;</span></button>
                    <h1 className="timelapse-heading">Select range for timelapse video</h1>
                    <div className="timelapse-range">
                        <label htmlFor="range-select">Start date:</label>
                        <select name="range-select" value={this.state.range} onChange={this.handleRangeSelect}>
                            <option className="range-option" name="option">
                                Today
                            </option>
                            <option className="range-option" name="option">
                                This Week
                            </option>
                            <option className="range-option" name="option">
                                This Month
                            </option>
                            <option className="range-option" name="option">
                                From Begining
                            </option>
                        </select>
                    </div>
                    
                <button type="submit" className="timelapse-submit-btn">
                        SUBMIT
                </button>
        </form>
    </div> : null }
    {this.state.submitted ? 
        <div className="timelapse-viewer" id="map-container">
        <button className="cancel" onClick={this.closeModal}><span role="img" aria-label="cached">&#x274C;</span></button>
            <img className="timelapse-img" id="timelapse-img" alt="img" src='https://dentalmedicalsales.com/wp-content/uploads/2018/08/white-play-crop232-396x38416-1.png'/>
            <div className="timelapse-btn-grp">
                <button onClick={this.play}>PLAY</button>
                <button>STOP</button>
            </div>
        </div> : null }
      </div>
    )
  }}

export default Timelapse;