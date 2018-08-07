import React from 'react';
import './style.css';

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/tunes')
      .then(response => response.json())
      .then((data) => {
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
              songs.map((song, index) => (
                <tr key={song.id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    <img alt="artwork" className="art-work" src={song.artworkUrl100} />
                  </td>
                  <td>
                    {song.name}
                  </td>
                  <td>
                    {song.artistName}
                  </td>
                  <td>
                    {song.collectionName}
                  </td>
                  <td>
                    3:35
                  </td>
                  <td>
                    $1.78
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongsPage;
