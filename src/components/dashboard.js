import React from 'react';
import Header from './dashboard-header';
import Thumbnails from './thumbnails';
import Viewer from './viewer';
import Footer from './dashboard-footer';
import Loading from './loading';
import history from '../history';
import moment from 'moment';
import '../App.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            date: '' || moment(new Date()).format('MM/DD/YY'),
            imgArr: [],
            vidArr: [],
            currentImg: '',
            currentThumbTime: '',
            defaultImg: '',
            loading: false,
            error: false
        }
        this.handleSwap = this.handleSwap.bind(this)
        this.fetchNewByDate = this.fetchNewByDate.bind(this)
        this.dateUpdate = this.dateUpdate.bind(this)
    }


    componentDidMount() {
        if(this.props.siteName === '') {
            history.push('/')
        } else{
            this.fetchNewByDate();
        }
    }

    handleSwap(e) {
        let target = e.currentTarget;
        let imgName= target.name;
        let cTime = target.getAttribute('dateTime');
        console.log(cTime)
        this.setState({
            currentImg: imgName,
            currentThumbTime: cTime
        });
    }

    dateUpdate(newDate) {
        this.setState({date : newDate}, function() {
            this.fetchNewByDate()
        })
    }

    fetchNewByDate() {
        this.setState({
            loading: true,
            data: [],
            date: '' || moment(new Date()).format('MM/DD/YY'),
            imgArr: [],
            vidArr: [],
            currentImg: '',
            currentThumbTime: '',
            defaultImg: '',
            error: false
        });
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let currentSite = `https://${this.props.siteName}.dividia.net/`;
        fetch(`${proxy}${currentSite}ajax.php?action=getEvents&date=${this.state.date}`)
        .then( response => {
              if (response.status !== 200) {
                console.log('Error. Status Code: ' + response.status);
                return;
              }
              response.json().then(data => {
                  let images = data.filter(d => d.sType==="STILL");
                  let videos = data.filter(d => d.sType==="VIDEO");
                  let hour = images[0].sTimeStamp.split('').slice(8, 10).join('');
                  let minute = images[0].sTimeStamp.split('').slice(10, 12).join('');
                  let month = images[0].sTimeStamp.split('').slice(4, 6).join('');
                  let day = images[0].sTimeStamp.split('').slice(6, 8).join('');
                  let year = images[0].sTimeStamp.split('').slice(0, 4).join('');
                  let fullDate = `${month}/${day}/${year}`;
                  let daynight = '';
            switch(hour) {
                case '00': hour = 12; daynight = 'AM';
                    break;
                case '01': hour = 1; daynight = 'AM';
                    break;
                case '02': hour = 2; daynight = 'AM';
                    break;
                case '03': hour = 3; daynight = 'AM';
                    break;
                case '04': hour = 4; daynight = 'AM';
                    break;
                case '05': hour = 5; daynight = 'AM';
                    break;
                case '06': hour = 6; daynight = 'AM';
                    break;
                case '07': hour = 7; daynight = 'AM';
                    break;
                case '08': hour = 8; daynight = 'AM';
                    break;
                case '09': hour = 8; daynight = 'AM';
                    break;
                case '10': daynight = 'AM';
                    break;
                case '11': daynight = 'AM';
                    break;
                case '12':  daynight = 'PM';
                    break;
                case '13': hour = 1; daynight = 'PM';
                    break;
                case '14': hour = 2; daynight = 'PM';
                    break;
                case '15': hour = 3; daynight = 'PM';
                    break;
                case '16': hour = 4; daynight = 'PM';
                    break;
                case '17': hour = 5; daynight = 'PM';
                    break;
                case '18': hour = 6; daynight = 'PM';
                    break;
                case '19': hour = 7; daynight = 'PM';
                    break;
                case '20': hour = 8; daynight = 'PM';
                    break;
                case '21': hour = 9; daynight = 'PM';
                    break;
                case '22': hour = 10; daynight = 'PM';
                    break;
                case '23': hour = 11; daynight = 'PM';
                    break;
                default: hour = images[0].sTimeStamp.split('').slice(8, 10).join('')
            }
                  let rTime = `${hour}:${minute} ${daynight}`;
                  let dateAndTime = `${fullDate}   ${rTime}`;
                  this.setState({
                     data: data,
                     imgArr: images,
                     vidArr: videos,
                     defaultImg: `${currentSite}${images[0].sImage}`,
                     currentThumbTime: `${dateAndTime}`,
                     loading: false
                    });
                })
          .catch(err => {
            console.log('Fetch Error: ', err);
                });
            })
    }

    back() {
        history.push('/');
    }

    render() {
    return (
        <div className="dashboard">
                { this.state.loading ? <Loading /> : null }
                <Header dateSet={this.dateUpdate} siteName={this.props.siteName} />
                <Thumbnails siteName={this.props.siteName} 
                            imgData={this.state.imgArr}
                            vidData={this.state.vidArr}
                            onSwap={this.handleSwap}
                            />
                <Viewer focusImg={this.state.currentImg} defaultImg={this.state.defaultImg} timeStamp={this.state.currentThumbTime} />
                <Footer focusImg={this.state.currentImg} defaultImg={this.state.defaultImg}/>
        </div>
        )
    }
}

export default (Dashboard);