// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const serachResults = destinationsList.filter(
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="head">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            placeholder="Search"
            className="search-bar"
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search"
          />
        </div>
        <ul className="places-container">
          {serachResults.map(eachDestination => (
            <DestiantionItem
              placeDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
