import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Yelp } from "./util/Yelp"
import BusinessList from './components/BusinessList';
import SearchBar from "./components/SearchBar";
import Business from "./components/Business";
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import ReactDOM from 'react-dom';


class Root extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         businesses: []
    //     };
    //     this.searchYelp = this.searchYelp.bind(this);
    // }
    // searchYelp(term, location, sortBy) {
    //     Yelp.search(term, location, sortBy).then(businesses => {
    //
    //         this.setState({
    //             businesses: businesses
    //
    //         });
    //     });
    // }




    // render() {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <Header/>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <Home/>
    //                     <YelpAPI/>
    //                 </div>
    //             </div>
    //
    //         </div>
    //     );
    // }
}

//render(<App/>, window.document.getElementById("app"));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();