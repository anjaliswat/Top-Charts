class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
  fetch('http://localhost:3000/tunes')
    .then(response => response.json())
    .then(data => {
      console.log(data.feed.results)
      this.setState({ songs: data.feed.results })
    })
  }

  render() {
    const { songs } = this.state;

    return(
      <div>
        <h1> Top Songs </h1>
        <table className="top-songs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
          {
              songs.map((song, index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td> <img className="art-work" src={song.artworkUrl100} /> </td>
                    <td>{song.name}</td>
                    <td>{song.artistName}</td>
                    <td>{song.collectionName}</td>
                    <td>3:35</td>
                    <td>$1.78</td>
                  </tr>
                );
              })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <Home/>,
  document.getElementById('app')
)
