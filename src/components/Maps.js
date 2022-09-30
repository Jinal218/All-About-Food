import {Component} from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component{
    render() {
        return (
          <Map
            google={this.props.google}
            style={{ width: "50%", height: "70%" }}
            zoom={10}
            initialCenter={{
              lat: 23.022505,
              lng: 72.571365,
            }}
          />
        );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCp2IVQfxqxN4Ie6QJjCTv55lnSwShQsVs",
})(MapContainer)
