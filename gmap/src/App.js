import './App.css';
import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return(
      <Map
        google = {this.props.google}
        style = {{width:"100%", height:"100%",}}
        zoom = {18}
        initialCenter = {
          {
          lat: 39.750613,
          lng: -75.550564
          }
        }
      />
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey:"AIzaSyBTkEsd9nZlUuWBT3Y48d9Rl_Tj8jLrVng"
})(MapContainer)

