import React from 'react';
import ActionContainer from './action-container';
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
            defaultImg: '',
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
                console.log(`https://${this.props.siteName}.dividia.net/${images[0].sImage}`)
                  this.setState({
                     data,
                     imgArr: images,
                     vidArr: videos,
                     defaultImg: `${currentSite}${images[0].sImage}` || `https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjekayvk__dAhVLOq0KHRgiD40QjRx6BAgBEAU&url=http%3A%2F%2Ftest.vietnamtool.vn%2Fbua-nho-dinh-can-sat-16oz-450g-2158&psig=AOvVaw3nUrnZhkplOcUVObu4Jp6I&ust=1539373475012880`
                    });
                })
          .catch(err => {
            console.log('Fetch Error: ', err);
          });
        })
    }

    handleSwap(e) {
        let target = e.currentTarget.name;
        this.setState({
            currentImg: target
        });
    }

    render() {
    return (
        <div>
            <h1>Welcome to the { this.props.siteName } iSite Page</h1>
                <ActionContainer />
                <Thumbnails siteName={this.props.siteName} 
                            imgData={this.state.imgArr}
                            vidData={this.state.vidArr}
                            onSwap={this.handleSwap}
                            />
                <Viewer focusImg={this.state.currentImg} defaultImg={this.state.defaultImg} />
        </div>
        )
    }
}

export default Dashboard;