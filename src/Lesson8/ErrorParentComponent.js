import React, { Component } from "react";
import ErrorChildComponent from "./ErrorChildComponent";
import ErrorWrapperComponent from "./ErrorWrapperComponent";

class ErrorParentComponent extends Component {
  render() {
    return (
      <div>
        <ErrorWrapperComponent>
          <ErrorChildComponent cLanguage="HTML" />
        </ErrorWrapperComponent>
        <ErrorWrapperComponent>
          <ErrorChildComponent cLanguage="Javascript" />
        </ErrorWrapperComponent>
        <ErrorWrapperComponent>
          <ErrorChildComponent cLanguage="React" />
        </ErrorWrapperComponent>
        <ErrorWrapperComponent>
          <ErrorChildComponent cLanguage="Physics" />
        </ErrorWrapperComponent>
      </div>
    );
  }
}

export default ErrorParentComponent;
