
//instância do MongoClient
    var MongoClient = require('mongodb');

    //conexão com o banco de dados remoto exemplomlab
    MongoClient.connect('mongodb://teste:teste123@ds153593.mlab.com:53593/vendaslivros', function (err, db) {  
              if(!err) {
         console.log('Conectado');
     }
      
         //criação da collection Estudantes
         db.collection('Estudantes', function (err, collection) {
            //inserção de 4 estudantes na collection      
            collection.insert({ nome: 'Maria', idade: '18' });
            collection.insert({ nome: 'Joana', idade: '22' });
            collection.insert({ nome: 'João', idade: '23' });  
            collection.insert({ nome: 'Luis', idade: '19' });    
    
            db.collection('Estudantes').count(function (err, count) {
                if (err) throw err;            
                console.log('Total linhas inseridas: ' + count);
            });
        });
    });

  