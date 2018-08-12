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

  componentDidUpdate(prevProps) {
    const { sorted } = this.props;

    if (prevProps.sorted !== sorted) {
      let newArrow = '▼';

      if (sorted) {
        newArrow = '▼';
      }

      this.setState({ arrow: newArrow });
    }
    console.log(prevProps.sorted);
    console.log(sorted);
  }

  handleClick(name) {
    const { setSortedColumn } = this.props;

    return () => {
      setSortedColumn(name);
    };
  }

  render() {
    const { name } = this.props;
    const { arrow } = this.state;

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
