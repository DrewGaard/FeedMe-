const apiKey = 'zGB6WS2ubGzJUZzKeiodJ7rxjOrc3oeQiM32TisJt4ukWQW6-V1fR3DZklACteSxCTZuY5Q3ac0yHxYa9yltHENHzuIhnC4_Is60VAaR1vzzCVeZBsWU859FdTbfWnYx';



const Yelp = {
    search(term, sortBy, latitude, longitude) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&sort_by=${sortBy}&latitude=${latitude}&longitude=${longitude}`,
            {headers: {authorization: `Bearer ${apiKey}`}
            }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));

            }
        });
    }
};

export default Yelp;