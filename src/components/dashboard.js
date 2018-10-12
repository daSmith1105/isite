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
        let target = e.currentTarget.name;
        this.setState({
            currentImg: target
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
                  this.setState({
                     data: data,
                     imgArr: images,
                     vidArr: videos,
                     defaultImg: `${currentSite}${images[0].sImage}` || `https://www.naqda.gov.lk/images/img_not_available.png`,
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
                <Viewer focusImg={this.state.currentImg} defaultImg={this.state.defaultImg} />
                <Footer focusImg={this.state.currentImg} defaultImg={this.state.defaultImg}/>
        </div>
        )
    }
}

export default (Dashboard);