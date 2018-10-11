import React from 'react';
import Thumbnails from './thumbnails';
import Viewer from './viewer';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            imgArr: [],
            vidArr: [],
            currentImg: '',
            loading: false,
            error: false
        }
        this.handleSwap = this.handleSwap.bind(this)
    }


    componentDidMount() {
        let currentSite = `https://${this.props.siteName}.dividia.net/`;
        fetch(`${currentSite}ajax.php?action=getEvents&date=10/08/18`)
        .then( response => {
              if (response.status !== 200) {
                console.log('Error. Status Code: ' + response.status);
                return;
              }
              response.json().then(data => {
                  let images = data.filter(d => d.sType==="STILL");
                  let videos = data.filter(d => d.sType==="VIDEO");

                  this.setState({
                     data,
                     imgArr: images,
                     vidArr: videos 
                    });
                })
          .catch(err => {
            console.log('Fetch Error: ', err);
          });
        })
    }

    handleSwap(e) {
        let target = e.currentTarget.name;
        console.log(target);
        this.setState({
            currentImg: target
        });
    }

    render() {
    return (
        <div>
            <h1>Welcome to the { this.props.siteName } iSite Page</h1>
                <Thumbnails siteName={this.props.siteName} 
                            imgData={this.state.imgArr}
                            vidData={this.state.vidArr}
                            onSwap={this.handleSwap}
                            />
                <Viewer focusImg={this.state.currentImg} />
        </div>
        )
    }
}

export default Dashboard;