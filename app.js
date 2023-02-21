const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
dbname = 'ARosaje.sqlite';

let db = new sqlite3.Database(dbname, sqlite3.OPEN_READWRITE, err => {
          if (err) throw err
          console.log('database  started on '+ dbname)
})

app.get('/affichage', (req, res)=>{
          //res.send('Hello word')
          try{
          db.all('SELECT * FROM utilisateur', [], (err, data) => {  ///////////////////db.get() db.all() db.each()
                    if(err) return res.json({status:1000, success:false, error:err})
                    if(data.length<1) return res.json({status:3000, success:false, error:err})

                    let name = data.name;
                    console.log(data)            /// data.name ne fonctionne pas (a resoudre)
          
                    //return res.json({status:200, data:data, success:true})
                    //return res.json({data:data})
                    return res.send(JSON.stringify(data))
          })
          }catch(error){
                    return res.json({status:4000, success:false, error:error})
          }
          //res.end();
          
})

app.listen(3000);

fetch('localhost:3000/affichage')
.then((data) => {
          console.log(`getConversationsCalls success! data: [C]Querying ${JSON.stringify(data, null, 2)}`);
})
