import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ song }) => (
  <tr>
    <td>
      {song.rank}
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
);

Song.propTypes = {
  song: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    rank: PropTypes.number,
    name: PropTypes.string,
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
  }).isRequired,
};

export default Song;
