const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});

const kittySchema = new mongoose.Schema({
    name: String
});

// const Kitten = mongoose.model('Kitten', kittySchema);

kittySchema.methods.speak = function(){
    const greeting = this.name 
    ? "Meow name is " + this.name
    :"I dont have a name";
    console.log(greeting);
}
const Kitten = mongoose.model("Kitten", kittySchema);


const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);


const fluffy = new Kitten({name: 'fluffy'});
fluffy.speak(); //"meow name is fluffy"

fluffy.save(function(err, fluffy){
    if(err) return console.error(err);
    fluffy.speak();
});

Kitten.find(function(err, kittens){
    if(err) return console.error(err);
    console.log(kittens);
});

// Kitten.find({name: /^fluff/}, callback);
