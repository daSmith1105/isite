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
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data);
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
            <p>{ this.state.data !== '' ? this.state.data : null }</p>
        </div>
        )
    }
}

export default Dashboard;