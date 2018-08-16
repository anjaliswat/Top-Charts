import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { setSortedColumn, sorted } = this.props;
    const { ascending } = this.state;

    return () => {
      const newAscending = sorted ? !ascending : true;
      this.setState({ ascending: newAscending });
      setSortedColumn(name, newAscending);
    };
  }

  render() {
    const { name, sorted } = this.props;
    const { ascending } = this.state;

    let arrow = '';

    if (sorted) {
      if (ascending) {
        arrow = '▲';
      } else {
        arrow = '▼';
      }
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
