createTable();
function createTable() {
    var a, b, tableEle, rowEle, colEle;
    var myTableDiv = document.getElementById("dynamic_table");
    var dynamicTableTwo = document.getElementById("dynamic_table_two");
    var dynamicTableThree = document.getElementById("dynamic_table_three");
    

    a = 5;
    b = 5;
    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else {
        tableEle = document.createElement('table');
        for (var i = 1; i <= a; i++) {
            rowEle = document.createElement('tr');
            rowEle.className = "table_rows";
            rowEle.id = "checkers_"+i;
            for (var j = 1; j <= b; j++) {
                let text = document.createTextNode("");
                colEle = document.createElement('td');
                colEle.className = "circle";
                colEle.appendChild(text);
                rowEle.appendChild(colEle);
                colEle.id = "checkers_"+i+''+j;
                checkersCircle(rowEle,colEle);
                oddCircle(rowEle,colEle)
                
                
            }
            console.log("table",rowEle);
            tableEle.appendChild(rowEle);
        }
        myTableDiv.innerHTML = tableEle.outerHTML ;
        dynamicTableTwo.innerHTML = tableEle.innerHTML;
        dynamicTableThree.innerHTML = tableEle.innerHTML;
    }
}



function checkersCircle(rowEle,colEle){
    const rowIdVal = rowEle.id.split("_");
    const rowId = rowIdVal[1];
    const colIdVal = colEle.id.split("_");
    const colId = colIdVal[1];
    if(isOdd(rowId)){
        if(!isOdd(colId)){
            colEle.className = "checker-circle";
        }
    } else {
        if(isOdd(colId)){
            colEle.className = "checker-circle";
        }
    }
 }


function oddCircle(rowEle,colEle){
    const rowIdVal = rowEle.id.split("_");
    const rowId = rowIdVal[1];
    const colIdVal = colEle.id.split("_");
    const colId = colIdVal[1];
    colEle.className = "odd-circle";
    if(!isOdd(rowId)){
        if(!isOdd(colId)){
            colEle.className = "circle";
        }
    }
}

function isOdd(num) { 
    return num % 2;
}






function formSubmit (form) {
    const boxWidth = form.box_width.value;
    const boxHeight = form.box_height.value;
    const boxRows = form.box_rows.value;
    const boxCols = form.box_columns.value;
    const circleRadius = form.circle_radius.value;
    const  dotsColor = form.dots_color.value;
    const boxColor = form.box_color.value;
    const selectedPattern = form.matrix_radio.value;
    if(boxWidth === "" || boxHeight === "" || boxRows === "" || circleRadius === "" || dotsColor === "" || boxColor === "") {
        alert ("Please!! select all fields")
    } else {
        let formData = [];
        formData = {
            'boxWidth' : boxWidth,
            'boxHeight': boxHeight,
            'boxRows': boxRows,
            'boxCols': boxCols,
            'circleRadius': circleRadius,
            'dotsColor': dotsColor,
            'boxColor':boxColor,
            'selectedPattern': selectedPattern

        };

        createMatrix(formData)
    }
}


function createMatrix(data){
    var a, b, tableEle, rowEle, colEle;
    var tableTag = document.getElementById("dynamic_table_four");
    
    tableTag.parentElement.style.width = data.boxWidth + "px";
    tableTag.parentElement.style.height = data.boxHeight + "px";
    
    const rows = data.boxRows;
    const cols = data.boxCols;
    if (rows == "" || cols == "") {
        alert("Please enter some numeric value");
    } else {
        tableEle = document.createElement('table');
        for (var i = 1; i <= rows; i++) {
            rowEle = document.createElement('tr');
            rowEle.className = "table_rows";
            rowEle.id = "checkers_"+i;
            for (var j = 1; j <= cols; j++) {
                let text = document.createTextNode("");
                colEle = document.createElement('td');
                colEle.className = "circle";
                colEle.appendChild(text);
                rowEle.appendChild(colEle);
                colEle.id = "checkers_"+i+''+j;
                //checkersCircle(rowEle,colEle);
               // oddCircle(rowEle,colEle)
                
                
            }
            tableEle.appendChild(rowEle);
        }
        tableTag.innerHTML = tableEle.outerHTML ;
        
    }
}