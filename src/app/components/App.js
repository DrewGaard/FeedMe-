import React from 'react';

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

import Yelp from '../util/Yelp';



/*
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
const businesses = [business,
                  business,
                  business,
                  business,
                  business,
                  business];
*/



class App extends React.Component {





    componentDidMount() {


        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;


                console.log('run' + lat + lng);


            });
        } else {
            alert('This Browser doesn\'t support HTML5 geolocation');
        }


    }


    constructor (props) {
        super(props);

        this.state = ({
            businesses: [],
        })

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, sortBy, Latitude, Longitude) {
        //console.log(`Searching... ${term}, ${location}, ${sortBy}`);
        //console.log(Yelp.search('food',91301, 'best_match'));
        Yelp.search(term, sortBy, Latitude, Longitude).then(businesses => {
            //console.log(businesses);
            //console.log(this);
            this.setState ({
                businesses: businesses
            });
        });
    }

    render () {

        return (
            <div className="App">
                <h1>FeedMe</h1>
                {<SearchBar searchYelp={this.searchYelp}/>}
                <BusinessList businesses={this.state.businesses}/>
                <canvas id="wheel"></canvas>
            </div>
        );
    }
}

export default App;