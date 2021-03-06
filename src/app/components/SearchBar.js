import React from 'react';

import styles from './SearchBar.css';


const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}




class SearchBar extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            term: 'pizza',
            //location: 'Stockton',
            latitude: '37.000',
            longitude: '-121.0000',
            sortBy: 'best_match'
        }
        this.handleTermChange =  this.handleTermChange.bind(this);
        this.handleLocationChange =  this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.sortBy, this.state.latitude, this.state.longitude);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)}
                        key={sortByOptionValue}
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>);
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    {<a onClick={this.handleSearch}>FeedMe</a>}
                </div>
            </div>
        )
    }
}

export default SearchBar;