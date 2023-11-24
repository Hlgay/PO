var config=require('./dbConfig');
 const sql=require('msnodesqlv8');

 axios.get('http://localhost:3000/dboperations')
 .then(response => {
    console.log(response.data);
 })
 .catch(error => {
    console.log(error);
 });
 async function getDoadores(){
  try {
   sql.query(config,"select * from [dbo].[doadores]",(err,rows) => {
    console.log(err);
    console.log(rows);
   })
  } catch (error ) {
   console.log(error);
  }
 }
 module.exports={
    getDoadores:getDoadores
 }