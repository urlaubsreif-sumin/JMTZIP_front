var db = openDatabase("mainDB", 1.0, "mainDB_for_matzip",200000)

function createTable(){
    db.transaction(function(tx){
        tx.executeSql("CREATE TABLE mainDB(name, category, address, location, time, cost, score, personnel)");
    });
}

function insertData(){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO mainDB VALUES(?,?,?,?,?,?,?,?), [txtName.value, txtCategory.value, txtAddress.value, txtLocation.value, txtTime.value, txtCost.value, txtScore.value, txtPersonnel.value]")
    });
}


function selectData(){
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM MainDB")
    })
    }
}
}

function selectData(){

        db.transaction(function(tx){

          tx.executeSql("select * from Test",[],



            function(tx,result){

              for(var i = 0; i < result.rows.length; i++){

                var row = result.rows.item(i);

                document.getElementById('table1').innerHTML +=  "<tr><td>" + row['id'] + "</td><td>" + row['name'] + "</td></tr>";

              }



            });