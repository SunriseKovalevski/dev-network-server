import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileActions";
import Question from "../../data/questions/Question";

class Fight extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <h4>Loading...</h4>;
    } else {
      dashboardContent = <h1>prepare fo fight!</h1>;
    }

    return (
      <div className="fight">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Fight!</h1>
              {dashboardContent}
              <div className="row">
                <div className="col-md-3">
                  <h4>Area for your personality</h4>
                </div>
                <div className="col-md-3">
                  <h4>Area for battle questions!</h4>
                  <Question />
                  <button
                    type="button"
                    className="btn btn-info btn-lg"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Defence
                  </button>
                </div>
                <div className="col-md-3">
                  <h4>Area for enemy picture</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Fight.propTypes = {
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
)(Fight);
