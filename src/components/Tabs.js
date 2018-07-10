import React, { Component } from "react";
import { Button, Tab } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Tabs extends Component {
  static propTypes = {
    _onBoxChange: PropTypes.func,
    _onClickChooseAll: PropTypes.func,
    _onClickClearAll: PropTypes.func,
    data: PropTypes.array
  };

  _onClickChooseAll = () => {
    this.props._onClickChooseAll();
  };
  _onBoxChange = e => {
    this.props._onBoxChange(e);
  };

  _onClickClearAll = () => {
    this.props._onClickClearAll();
  };

  render() {
    return (
      <Tab.Content animation>
        {this.props.data.map(item => (
          <Tab.Pane key={item.tabKey} eventKey={item.tabKey}>
            {item.value.map(value => (
              <div className="input_wrapper" key={value.key}>
                <div className="squaredThree">
                  <input
                    className="input_check"
                    type="checkbox"
                    id={value.name}
                    value={value.name}
                    data-tabkey={item.tabKey}
                    data-dev={value.dev}
                    onChange={this._onBoxChange}
                  />
                  <label htmlFor={value.name} />
                </div>
                <label className="label-for" htmlFor={value.name}>
                  {value.name}
                </label>
              </div>
            ))}
          </Tab.Pane>
        ))}
        <Button
          className="tab_btn"
          bsStyle="primary"
          onClick={this._onClickChooseAll}
        >
          Choose All
        </Button>
        <Button
          className="tab_btn"
          bsStyle="primary"
          onClick={this._onClickClearAll}
        >
          Clear All
        </Button>
      </Tab.Content>
    );
  }
}
