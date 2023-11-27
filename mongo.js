const mongoose = require('mongoose');
const env = require('./secretHidey.js');

mongoose.Promise= global.Promise;

connect().catch(err => console.log(err));

 async function connect() {
   const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}@`
   return mongoose.connect(mongoUri, {useMongoClient: true});
 }

const resumeSchema = new mongoose.Schema({
  name: String,
});

const Resume = mongoose.model('Resume', resumeSchema);

const resume = new Resume({name: 'testfile' });

await resume.save();

console.log(resume.name);

module.exports = connect;

//from resume-service.js
// const Resume = require('./resume-model');
// const ReadPreference = require('mongodb').ReadPreference;

// require('./mongo').connect();

// function get(req, res){
//   const docquery = Resume.find({}).read(readPreference.NEAREST);
//   docquery
//     .exec()
//     .then(resumes => {
//         res.json(resumes)
//     })
//   .catch(err => {
//     res.status(500).send(err);
//   });
// }

// module.exports = {
//   get
// }