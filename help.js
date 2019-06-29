const config = require('./config');




module.exports = {
    items : {
        name: `- ${config.prefix}items`,
        value: `gives you all the available mini items and their abbreviations. __names and abbreviation can be used to retreive the pairs of an item using **${config.prefix}pair** command__`
    },
    pair : {
        name: `- **${config.prefix}pair [__item name__ or __item abbreviation__]**`,
        value: `get all available combinations for a specific mini item. __to get all available item names and abbreviations use **${config.prefix}items**__`
    }
}