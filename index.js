const continents = require('countries-list')
const fs = require('fs')

const filterCountry = (country, token) => {
    return {
        token,
        name: country.name,
        native: country.native,
        capital: country.capital,
    }
}

const countries = Object.keys(continents.countries).reduce((a, b) => {
    if (!!a[continents.countries[b]['continent']]) {
        a[continents.countries[b]['continent']]['countries'].push(filterCountry(continents.countries[b], b))
    } else {
        a[continents.countries[b]['continent']] = {
            name: continents.continents[continents.countries[b]['continent']],
            countries: [filterCountry(continents.countries[b], b)],
        }
    }
    return a
}, {})

console.log(countries)

// fs.writeFileSync('countries.json', JSON.stringify(countries))