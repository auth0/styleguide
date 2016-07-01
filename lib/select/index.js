import React, {Component} from "react";

export default class select extends Component {
  static defaultProps = {
    options: ["None"],
    label: "",
    width: 100,
    afterSelect: () => {}
  };

  static propTypes = {
    options: React.PropTypes.array.isRequired,
    label: React.PropTypes.string,
    width: React.PropTypes.number,
    afterSelect: React.PropTypes.func
  };

  state = {
    selected: 0
  };

  showLabel() {
    if(this.props.label.length) {
      return (<span>{this.props.label} </span>);
    }
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })

    return this.props.afterSelect(this.props.options[e.target.value])
  }

  render() {
    var options = this.props.options;
    var width = {
      maxWidth: this.props.width
    };

    return (
      <div className="select" onChange={this.handleChange.bind(this)}>
        {this.showLabel()}
        <span className="select-value text-truncate" style={width}>{options[this.state.selected]}</span>
        <i className="icon-budicon-460"></i>
        <select>
          {
            options.map((name, index) => {
              return (
                <option key={index} value={index}>{name}</option>
              );
            })
          }
        </select>
      </div>
    );
  }
}
