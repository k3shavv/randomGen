const mongoose=require('mongoose');


const Schema = mongoose.Schema;

const CodesSchema= new Schema({

  subject: {
    type: String,
    required: true
  },
  series: {
    type: String
  },
  sequence: {
    type: String
  },
 
});

module.exports =Codes= mongoose.model('codes',CodesSchema);