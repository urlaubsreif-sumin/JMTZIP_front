var db = window.openDatabase("TestDB", "1.0", "this is for test", 200000);

    function createTable(){
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS testTable (name, score)');
        });
    }

    function insertData(){
        db.transaction(function(tx){
            tx.executeSql("insert into testTable values(?,?)", [txtName.value, txtScore.value]);
        });
    }

    function selectData(){
        db.transaction(function(tx){
            tx.executeSql("select * from testTable", [], successCB);
        });
    }

    function successCB(tx, result){
        document.getElementById('resultTable').innerHTML = "<th>가게 명</th><th>평점</th><th>자세히</th>";
        for(var i = 0; i < result.rows.length; i++){
            var row = result.rows.item(i);
            document.getElementById('resultTable').innerHTML += "<tr><td>" + row['name'] + "</td><td>" + row['score'] + "</td><td></td></tr>";
        }
    }