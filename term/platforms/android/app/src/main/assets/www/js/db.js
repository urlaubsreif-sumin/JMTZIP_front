var db = window.openDatabase("testDb.db");

function createTable(){
    db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS testTable (name, score)');
    });
}

function insertData(){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO testTable values(?,?)", [txtName.value, txtScore.value]);
    });
}

function selectData(){
    db.transaction(function(tx){
        tx.executeSql("SELECT * FROM testTable", [], successCB);
    });
}

<<<<<<< HEAD
function successCB(tx, result){
    document.getElementById('resultTable').innerHTML = "<th>가게 명</th><th>평점</th><th>자세히</th>";
    for(var i = 0; i < result.rows.length; i++){
        var row = result.rows.item(i);
        document.getElementById('resultTable').innerHTML += "<tr><td>" + row['name'] + "</td><td>" + row['score'] + "</td><td></td></tr>";
    }
}
=======
    function successCB(tx, result){
        document.getElementById('resultTable').innerHTML = "";
        for(var i = 0; i < result.rows.length; i++){
            var row = result.rows.item(i);
            document.getElementById('resultTable').innerHTML += "<tr><td>" + row['name'] + "</td><td>" + row['score'] + "</td><td></td></tr>";
        }
    }
>>>>>>> parent of a48b4e2... commit 6/15 3:30
