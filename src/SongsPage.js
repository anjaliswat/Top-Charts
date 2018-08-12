import React from 'react';
import Song from './Song';
import './style.css';
import TableHeader from './TableHeader';

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
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

  render() {
    const { songs } = this.state;

    return (
      <div>
        <h1>
          Top Songs
        </h1>
        <table className="top-songs">
          <thead>
            <tr>
              <TableHeader name="" />
              <th />
              <TableHeader name="Name" />
              <TableHeader name="Artist" />
              <TableHeader name="Album" />
              <TableHeader name="Time" />
              <TableHeader name="Price" />
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
