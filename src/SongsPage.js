import React from 'react';
import Song from './Song';
import './style.css';
import TableHeader from './TableHeader';

function compareFunction(property) {
  return (a, b) => {
    if (a[property].toString().toLowerCase() < b[property].toString().toLowerCase()) {
      return -1;
    }
    return 1;
  };
}

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      sortBy: '',
    };

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  componentDidMount() {
    let path;

    if (process.env.NODE_ENV === 'development') {
      path = 'http://localhost:3000/tunes';
    } else {
      path = '/tunes';
    }

    fetch(path)
      .then(response => response.json())
      .then((data) => {
        const songs = data.feed.results;
        songs.forEach((song, i) => {
          song.rank = i + 1;
        });
        this.setState({ songs: data.feed.results });
      });
  }

  handleHeaderClick(name, ascending) {
    const { songs } = this.state;

    switch (name) {
      case 'Name':
        songs.sort(compareFunction('name'));
        break;
      case 'Artist':
        songs.sort(compareFunction('artistName'));
        break;
      case 'Album':
        songs.sort(compareFunction('collectionName'));
        break;
      default:
        songs.sort((a, b) => a.rank - b.rank);
        break;
    }

    if (!ascending) {
      songs.reverse();
    }

    this.setState({ songs, sortBy: name });
  }

  render() {
    const { songs, sortBy } = this.state;

    return (
      <div>
        <h1>
          Top Songs
        </h1>
        <table className="top-songs">
          <thead>
            <tr>
              <TableHeader name="" setSortedColumn={this.handleHeaderClick} sorted={sortBy === ''} />
              <th />
              <TableHeader name="Name" setSortedColumn={this.handleHeaderClick} sorted={sortBy === 'Name'} />
              <TableHeader name="Artist" setSortedColumn={this.handleHeaderClick} sorted={sortBy === 'Artist'} />
              <TableHeader name="Album" setSortedColumn={this.handleHeaderClick} sorted={sortBy === 'Album'} />
              <TableHeader name="Time" setSortedColumn={this.handleHeaderClick} sorted={sortBy === 'Time'} />
              <TableHeader name="Price" setSortedColumn={this.handleHeaderClick} sorted={sortBy === 'Price'} />
            </tr>
          </thead>

          <tbody>
            {
              songs.map(song => (
                <Song song={song} key={song.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongsPage;
