var db = window.openDatabase("mainDB", 1.0, "mainDB_for_matzip",200000)

function createDB(){
    db.transaction(function(tx){
        alert('create!');
        tx.executeSql("CREATE TABLE matzip(ID, name, category, address, location, time, cost, score, personnel)");
    });
}

function errorCB(err) {
        alert("Error processing SQL: "+err.code);
}

function insertData(){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO matzip VALUES(?,?), [txtName.value, txtScore.value]")
    });
}

function selectData(){
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM matzip", [],
            function(tx, result){
                for(var i = 0; i < result.rows.length; i++){
                    var row = result.rows.item(i);
                    document.getElementById('resultTable').innerHTML += "<tr><td>" + row['name'] + "</td><td>" + row['score'] + "</td><td></td></tr>" + ;
                }
            }
        );
    });
}