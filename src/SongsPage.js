import React from 'react';
import Song from './Song';
import './style.css';
import TableHeader from './TableHeader';

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      sortBy: null,
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

  handleHeaderClick(name) {
    const { sortBy } = this.state;
    this.setState({ sortBy: name });
    console.log(sortBy);
    console.log(name);
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
