import React, { Component } from 'react';
import { Map, GoogleApiWrapper ,InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  
    
  render() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 25.842716,
            lng: 82.199266
        }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
       
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBc4NXihSAj1HLxFwq5tRs67LyHe2Muu0'
})(MapContainer);



