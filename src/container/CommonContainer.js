/* eslint react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../src/actions/index";

export default function CommonContainer(ComposedComponent) {
  class CommonContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      commonReducer: state.commonReducer,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(CommonContainer);
}
