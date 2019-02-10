import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileActions";

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
                  <button
                    type="button"
                    className="btn btn-info btn-lg"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Defence
                  </button>
                  <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">
                            Последний месяц в году?
                          </h4>
                          <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="container">
                            <div className="col-md-12">
                              <button
                                className="btn btn-default btn-info"
                                type="button"
                                data-dismiss="modal"
                              >
                                Январь
                              </button>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="btn btn-default btn-info"
                                type="button"
                                data-dismiss="modal"
                              >
                                Воскресенье
                              </button>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="btn btn-default btn-info"
                                type="button"
                                data-dismiss="modal"
                              >
                                Декабрь
                              </button>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="btn btn-default btn-info"
                                type="button"
                                data-dismiss="modal"
                              >
                                Март
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5>Последнй месяц в году?</h5>
                  Январь Воскресенье Декабрь Март
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
