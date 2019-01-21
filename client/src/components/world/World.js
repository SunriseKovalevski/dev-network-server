import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileActions";
import Map from "../map/Map";
import Player from "../player";

import { tiles } from "../../data/maps/1";
import store from "../../store";

class World extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let worldContent;

    if (profile === null || loading) {
      worldContent = <h4>Loading...</h4>;
    } else {
      store.dispatch({
        type: "ADD_TILES",
        payload: {
          tiles
        }
      });
      worldContent = <Map />;
    }
    return (
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "400px",
          margin: "20px auto"
        }}
      >
        {worldContent}
      </div>
    );
  }
}

World.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(World);
