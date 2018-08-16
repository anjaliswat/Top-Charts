import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { setSortedColumn } = this.props;

    return () => {
      setSortedColumn(name);
    };
  }

  render() {
    const { name } = this.props;
    const { sorted } = this.props;

    let arrow = '';

    if (sorted) {
      arrow = '▲';
    }

    return (
      <th onClick={this.handleClick(name)} className="table-header">
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
  setSortedColumn: PropTypes.func.isRequired,
  sorted: PropTypes.bool.isRequired,
};

export default TableHeader;
