createGridMatrix();
createCheckersMatrix();
createOddMatrix();
function createGridMatrix() {
    var a, b, tableEle, rowEle, colEle;
    var myTableDiv = document.getElementById("dynamic_table");
    const row = 5;
    const col= 5;
    if (row == "" || col == "") {
        alert("Please enter some numeric value");
    } else {
        tableEle = document.createElement('table');
        for (var i = 1; i <= row; i++) {
            rowEle = document.createElement('tr');
            rowEle.className = "table_rows";
            rowEle.id = "checkers_"+i;
            for (var j = 1; j <= col; j++) {
                let text = document.createTextNode("");
                colEle = document.createElement('td');
                colEle.className = "circle";
                colEle.appendChild(text);
                rowEle.appendChild(colEle);
                colEle.id = "checkers_"+i+''+j;
            }
            console.log("table",rowEle);
            tableEle.appendChild(rowEle);
        }
        myTableDiv.innerHTML = tableEle.outerHTML ;
    }
}


function createCheckersMatrix() {
    var a, b, tableEle, rowEle, colEle;
    var dynamicTableTwo = document.getElementById("dynamic_table_two");
   
    const row = 5;
    const col= 5;
    if (row == "" || row == "") {
        alert("Please enter some numeric value");
    } else {
        tableEle = document.createElement('table');
        for (var i = 1; i <= row; i++) {
            rowEle = document.createElement('tr');
            rowEle.className = "table_rows";
            rowEle.id = "checkers_"+i;
            for (var j = 1; j <= col; j++) {
                let text = document.createTextNode("");
                colEle = document.createElement('td');
                colEle.appendChild(text);
                colEle.className = "circle";
                rowEle.appendChild(colEle);
                colEle.id = "checkers_"+i+''+j;
                checkersCircle(rowEle,colEle);
                //oddCircle(rowEle,colEle)
                
                
            }
            console.log("table",rowEle);
            tableEle.appendChild(rowEle);
        }
        dynamicTableTwo.innerHTML = tableEle.innerHTML;
    }
}

function createOddMatrix() {
    var tableEle, rowEle, colEle;
    var dynamicTableThree = document.getElementById("dynamic_table_three");
    

    const row = 5;
    const col= 5;
    if (row == "" || col == "") {
        alert("Please enter some numeric value");
    } else {
        tableEle = document.createElement('table');
        for (var i = 1; i <= row; i++) {
            rowEle = document.createElement('tr');
            rowEle.className = "table_rows";
            rowEle.id = "checkers_"+i;
            for (var j = 1; j <= col; j++) {
                let text = document.createTextNode("");
                colEle = document.createElement('td');
                colEle.className = "circle";
                colEle.appendChild(text);
                rowEle.appendChild(colEle);
                colEle.id = "checkers_"+i+''+j;
                oddCircle(rowEle,colEle)
                
                
            }
            console.log("table",rowEle);
            tableEle.appendChild(rowEle);
        }
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

        createResultMatrix(formData)
    }
}


function createResultMatrix(data){
    let  tableEle, rowEle, colEle;
    let tableTag = document.getElementById("dynamic_table_four");
    
    tableTag.parentElement.style.width = data.boxWidth + "px";
    tableTag.parentElement.style.height = data.boxHeight + "px";
    tableTag.parentElement.style.backgroundColor = data.boxColor;
    
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
                colEle.style.backgroundColor = data.dotsColor;
                colEle.style.borderRadius = data.circleRadius + "%";
                colEle.appendChild(text);
                rowEle.appendChild(colEle);
                colEle.id = "matcheckers_"+i+''+j;
                if(data.selectedPattern === 'checkers'){
                    checkersCircle(rowEle,colEle);
                } else if(data.selectedPattern === 'oddcircle'){
                    oddCircle(rowEle,colEle)
                }
                
            }
            tableEle.appendChild(rowEle);
        }
        tableTag.innerHTML = tableEle.outerHTML ;
        
    }
}