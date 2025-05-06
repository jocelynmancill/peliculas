const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  Título: String,
  Año: Number,
  Categoría: String,
  Actores: [String],
  Sinopsis: String,

  usuario: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Pelicula', peliculaSchema, 'movie');
