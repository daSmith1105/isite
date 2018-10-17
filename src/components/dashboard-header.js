import React from 'react';
import DateSelect from './date-select';
import history from '../history';
import '../App.css'
import Logo from './i-sitelogo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: ''
        }
        this.handleSetDate = this.handleSetDate.bind(this);
    }

    handleSetDate(dateVal) {
        this.setState({ date: dateVal }, function() {
        this.props.dateSet(this.state.date)
        })
    }
    

        render() {
            return (
                <div className="dash-header">
                    <p className="site-name">Site: { this.props.siteName }</p>
                    <p className="dividia-name">Dividia Technologies</p>
                    <DateSelect onDateSelect={this.handleSetDate} />
                    <img className="logo" 
                         src={Logo} 
                         alt="logo" 
                         onClick={ () => history.pushState('/') } />
                    <p className="data-usage">Data Usage: <span className="norm">1.0GB</span> of 10GB</p>
                </div>   
            )
        }
}

export default Header;