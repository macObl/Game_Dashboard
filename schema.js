const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
   T: String, // Title
   P: Number, // Game Price
   GD: Number, // Game Deal
   MS: Number, // Metacritic Score
   G: Array, // Genera
   F: Array // Feataures
});

module.exports = mongoose.model("games_collections", gameSchema);