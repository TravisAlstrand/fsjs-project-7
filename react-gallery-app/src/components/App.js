import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

// Flickr API Key
import config from '../config';

// 'Home Base' for entire app to send to index.js for rendering
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      apiKey: config,
      searchQuery: '',
      loading: true
    };
  }

  // as soon as App is rendered, perform a default search for 'dogs'
  componentDidMount() {
    this.handleSearch('wildlife');
  }

  // function to re-fetch data using user's search query
  handleSearch = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
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

  render() {
    return (
      <BrowserRouter>
        <div className='container'>

          <SearchForm onSearch={this.handleSearch} />

          <Nav />

          {/* Photo Container - if still loading, display the h3 */}
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : <PhotoContainer data={this.state.photos} query={this.state.searchQuery}/>
          }
{/* 
          <Switch>
            <Route exact path='/' render={() => <PhotoContainer data={this.state.photos} />} />
            <Route path='/beaches' render={() => <PhotoContainer data={this.state.photos} />} />
            <Route path='/sunset' render={() => <PhotoContainer data={this.state.photos} />} />
            <Route component={NotFound} />
          </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}