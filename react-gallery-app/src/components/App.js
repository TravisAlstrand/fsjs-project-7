import React, { Component } from 'react';
import { 
  Switch, 
  Route, 
  Redirect,
  withRouter 
} from 'react-router-dom';

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import Four0Four from './Four0Four';

// Flickr API Key
import config from '../config';

// 'Home Base' for entire app to send to index.js for rendering
class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      apiKey: config,
      searchQuery: '',
      loading: true
    };
  }

  // as soon as App is rendered, perform a default search 'wildlife'
  componentDidMount() {
    this.handleSearch('wildlife');
  }

  // function to fetch data using user's search query
  handleSearch = (query) => {

    // set loading to true so it displays while fetching if it was previously false
    this.setState({
      loading: true
    });

    // fetch photos from flickr api using apiKey and search query in url
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&
           api_key=${this.state.apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      // parse response to json
      .then(res => res.json())
      // set state values from response & set loading to false
      .then(data => {
        this.setState({
          photos: data.photos.photo,
          searchQuery: query,
          loading: false
        })
      })
      .catch(err => {
        console.log('Error fetching data', err)
      });
  }

  checkURL = () => {
    // check if URL begins with '/search'
    if (this.props.location.pathname.includes('/search/', 0)) {
      // if it does, check if URL differs from stateQuery state
      if (this.props.location.pathname.substring(8) !== this.state.searchQuery) {
        // re-call handleSearch passing current pathname excluding '/search/'
        this.handleSearch(this.props.location.pathname.substring(8));
      }
    } else { // if URL doesn't begin with '/search' repeat above accordingly
      if (this.props.location.pathname.substring(1) !== this.state.searchQuery) {
        // re-call handleSearch passing current pathname excluding '/'
        this.handleSearch(this.props.location.pathname.substring(1));
      }
    }
  }

  // when page updates, check URL / searchQuery state
  componentDidUpdate() {

    // this.checkURL();

    // console.log(this.state.searchQuery);
    // console.log(this.props.location.pathname.substring(1));
  }

  render() {
    return (
      <div className='container'>

        <SearchForm onSearch={this.handleSearch} />

        <Nav onSelect={this.handleSearch}/>

        <Switch>
          <Route exact path='/' render={() => <Redirect to='/wildlife' />} />

          <Route path='/wildlife' render={() => 
                                        <PhotoContainer data={this.state.photos}
                                        query={'wildlife'} 
                                        loading={this.state.loading} />} />

          <Route path='/beaches' render={() => 
                                        <PhotoContainer data={this.state.photos}
                                        query={'beaches'} 
                                        loading={this.state.loading} />} />

          <Route path='/sunset' render={() => 
                                        <PhotoContainer data={this.state.photos}
                                        query={'sunset'} 
                                        loading={this.state.loading} />} />

          <Route path='/search/:query' render={() => 
                                        <PhotoContainer data={this.state.photos}
                                        query={this.state.searchQuery} 
                                        loading={this.state.loading} />} />

          <Route component={Four0Four} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);