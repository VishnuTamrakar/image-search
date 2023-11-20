import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setSearchResults } from '../redux/action'; 

const ACCESS_KEY = 'CMPfqX3hatIJ3bVpoR_6y5p5xulv4S2u6Lmd-LL3Ie8'
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'office',
    };
  }


  

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
    
  };
  componentDidMount() {
    
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${ACCESS_KEY}`
      );
      this.props.setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data from Unsplash:', error);
    }
  };
  handleSearch = async () => {
    const { query } = this.state;

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`);
      this.props.setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data from Unsplash:', error);
    }
  };

  


  render() {
    return (
      <div className="container center">

        <div className="input-group d-flex align-items-center gap  marginTop   ">
          <input
            type="text"
            className="form-control shadow-lg  p-3 "
            placeholder="Search for photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append ">
            <button onClick={this.handleSearch} className="btn btn-dark  shadow-lg btnpadding "  type="button" >
           Search
            </button>
          </div>
         </div>
        </div>

        
    );
  }
}

const mapDispatchToProps = {
  setSearchResults,
};

export default connect(null, mapDispatchToProps)(SearchBar);