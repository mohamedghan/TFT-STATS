const config = require('./config');




module.exports = {
    items : {
        name: `- ${config.prefix}items`,
        value: `gives you all the available mini items and their abbreviations. __names and abbreviation can be used to retreive the pairs of an item using **${config.prefix}pair** command__`
    },
    pair : {
        name: `- **${config.prefix}pair [__item name__ or __item abbreviation__]**`,
        value: `get all available combinations for a specific mini item. __to get all available item names and abbreviations use **${config.prefix}items**__`
    },
    final : {
        name: `- ${config.prefix}final`,
        value: `gives you all the available finished items and their abbreviations. __finished item names and abbreviations can be used to get item needed to make that item using **${config.prefix}how** command__`
    },
    how : {
        name: `- ${config.prefix}how [__finished item name__ or __finished item abbreviation__]`,
        value: `gives you the ingredients needed to make a finished item. __finished item names and abbreviations can be retreived using **${config.prefix}final** command__`
    },
}