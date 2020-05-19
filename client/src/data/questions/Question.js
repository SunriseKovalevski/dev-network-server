import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileActions";
import questions from "../questions/questions";

class Question extends Component {
  componentDidMount() {}
  render() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{question.question}</h4>
              <button className="close" type="button" data-dismiss="modal">
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
                    {question.choices[0].text}
                  </button>
                </div>
                <div className="col-md-12">
                  <button
                    className="btn btn-default btn-info"
                    type="button"
                    data-dismiss="modal"
                  >
                    {question.choices[1].text}
                  </button>
                </div>
                <div className="col-md-12">
                  <button
                    className="btn btn-default btn-info"
                    type="button"
                    data-dismiss="modal"
                  >
                    {question.choices[2].text}
                  </button>
                </div>
                <div className="col-md-12">
                  <button
                    className="btn btn-default btn-info"
                    type="button"
                    data-dismiss="modal"
                  >
                    {question.choices[3].text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  questions: state.questions
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Question);
