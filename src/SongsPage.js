import React from 'react';
import Song from './Song';
import './style.css';

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
              <th />

              <th>
                Name
              </th>

              <th>
                Artist
              </th>

              <th>
                Album
              </th>

              <th>
                Time
              </th>

              <th>
                Price
              </th>

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
