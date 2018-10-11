import React from 'react';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        fetch(`https://${this.props.siteName}.dividia.net/ajax.php?action=getEvents&date=10/08/18`)
        .then(
            function(res) {
              if (res.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  res.status);
                return;
              }
        
              res.json().then(function(data) {
                  let imgArr = JSON.stringify(data.filter(d => d.sType==="STILL"));
                  let vidArr = JSON.stringify(data.filter(d => d.sType==="VIDEO"));
                  console.log(`----- Images -----` + imgArr);
                  console.log(`----- Videos -----` + vidArr);
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        }

    render() {
    return (
        <div>
            <h1>Welcome to the { this.props.siteName } iSite Page</h1>
        </div>
        )
    }
}

export default Dashboard;