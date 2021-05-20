import React from "react";
import {connect} from 'react-redux'
import { createstreams } from "../Actions"
import StramForm from './StreamForm'

class StramCreate extends React.Component {



  onSubmit = (formprops) => {
    this.props.createstreams(formprops);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StramForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null,{createstreams})(StramCreate);
