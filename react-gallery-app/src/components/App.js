import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import Four0Four from './Four0Four';

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

  // as soon as App is rendered, perform a default search for 'wildlife'
  componentDidMount() {
    this.handleSearch('wildlife');
  }

  // function to fetch data using user's search query
  handleSearch = (query) => {

    // set loading to true so it displays while fetching
    this.setState({
      loading: true
    });

    // fetch photos from flickr api using apiKey and search query in url
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&
           api_key=${this.state.apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      // parse response to json
      .then(res => res.json())
      // set state values from response & reset loading to false
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
 
          <Nav onSearch={this.handleSearch}/>

          <Switch>
            <Route exact path='/' render={() => <Redirect to='/wildlife' />} />

            <Route path='/wildlife' render={() => 
                                          <PhotoContainer data={this.state.photos}
                                          query={this.state.searchQuery} 
                                          loading={this.state.loading} />} />

            <Route path='/beaches' render={() => 
                                          <PhotoContainer data={this.state.photos}
                                          query={this.state.searchQuery} 
                                          loading={this.state.loading} />} />

            <Route path='/sunset' render={() => 
                                          <PhotoContainer data={this.state.photos}
                                          query={this.state.searchQuery} 
                                          loading={this.state.loading} />} />

            <Route path='/search/:query' render={() => 
                                          <PhotoContainer data={this.state.photos}
                                          query={this.state.searchQuery} 
                                          loading={this.state.loading} />} />

            <Route component={Four0Four} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}