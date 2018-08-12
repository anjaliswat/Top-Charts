import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrow: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { arrow } = this.state;
    let newArrow = '▼';

    if (arrow === '▼') {
      newArrow = '▲';
    } else if (arrow === '▲') {
      newArrow = '▼';
    }
    this.setState({ arrow: newArrow });
  }

  render() {
    const { name } = this.props;
    const { arrow } = this.state;

    return (
      <th onClick={this.handleClick} className="table-header">
        <span className="name">
          {name}
        </span>
        <span className="arrow">
          {arrow}
        </span>
      </th>
    );
  }
}

TableHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TableHeader;
