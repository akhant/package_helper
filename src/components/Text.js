import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Text extends Component {
  static propTypes = {
    _onClickCopy: PropTypes.func,
    _onClickMegaClear: PropTypes.func,
    _onClickMegaClearDev: PropTypes.func,
    text: PropTypes.array,
    textDev: PropTypes.array
  };
  _onClickCopy = (e) => {
    this.props._onClickCopy(e)
  }
  _onClickMegaClear = () => {
    this.props._onClickMegaClear()
  }
  _onClickMegaClearDev = () => {
    this.props._onClickMegaClearDev()
  }

  render() {
    return (
      <div className="text_wrapper">
        <div className="text">
          <p className="p_textarea"> {this.props.text.join(" ")} </p>
          <Button
            className="copy_btn"
            bsStyle="info"
            data-dev="false"
            onClick={this._onClickCopy}
          >
            Copy to buffer
          </Button>
          <Button
            className="megaclear_btn"
            bsStyle="danger"
            onClick={this._onClickMegaClear}
          >
            Mega Clear
          </Button>
        </div>
        <div className="text">
          <p className="p_textarea"> {this.props.textDev.join(" ")} </p>
          <Button
            className="copy_btn"
            bsStyle="info"
            data-dev="true"
            onClick={this._onClickCopy}
          >
            Copy to buffer
          </Button>
          <Button
            className="megaclear_btn"
            bsStyle="danger"
            onClick={this._onClickMegaClearDev}
          >
            Mega Clear
          </Button>
        </div>
      </div>
    );
  }
}
