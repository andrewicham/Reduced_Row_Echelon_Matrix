$(document).ready(function(){
    function Row(x, y, z, divID){
    this.x = x;
    this.y = y;
    this.z = z;
    this.divID = divID;
    
    this.makeArray = function(){
        intX = parseInt(x);
        intY = parseInt(y);
        intZ = parseInt(z);
        rowArr = [intX, intY, intZ];
        return rowArr;
    };
    this.printArray = function(){
        var newString = rowArr[0] + " " + rowArr[1] + " " + rowArr[2];
        var eloutput = document.getElementById(divID);
            output = newString;
            eloutput.textContent = output;
    };
};
    /*this function contains a series of statements which will "cancel" out an entire row if two or more rows are equivalent to each other, in accordance
    with the rules of reduced row echelon form.*/ 
    function rowCanceller(row1, row2, row3){
        if((row1[0] == row2[0]) && (row1[1] == row2[1]) && (row1[2] == row2[2])){
            row2[0] = 0;
            row2[1] = 0;
            row2[2] = 0;
            newString = row2;
            console.log("case one: " + row2);
            return row2;
        }
        else if((row1[0] == row3[0]) && (row1[1] == row3[1]) && (row1[2] == row3[2])){
            row3[0] = 0;
            row3[1] = 0;
            row3[2] = 0;
            newString = row3;
            console.log("case two: " + row3);
            return row3;
        }
        else if((row2[0] == row3[0]) && (row2[1] == row3[1]) && (row2[2] == row3[2])){
            row2[0] = 0;
            row2[1] = 0;
            row2[2] = 0;
            newString = row2;
            console.log("case three: " + row2);
            return row2
        }
    };
    
    function rowArranger(row1, row2, row3){
        //switches row 3 into row 1 position if row 1 position has a one in the row[0] location
        if((row3[0] == 1) && (row1[0] != row3[0]) && (row2[0] != row3[0])){
            temp = row1;
            row1 = row3;
            row3 = temp;
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //recursive call is necessary if you want to get the matrix into rre form.
            //rowArranger(row1, row2, row3);
        }
        else if((row2[0] == 1) && (row2[0] != row1[0]) && (row2[0] != row3[0])){
            temp = row1;
            row1 = row2;
            row2 = temp;
            
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //rowArranger(row1, row2, row3);
        }
        else if((row1[1] == 1) && (row1[1] != row2[1]) && (row1[1] != row3[1])){
            temp = row2;
            row2 = row1; 
            row1 = temp;
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //rowArranger(row1, row2, row3);
        }
        else if((row3[1] == 1) && (row3[1] != row2[1]) && (row3[1] != row1[1])){
            temp = row2;
            row2 = row3;
            row3 = temp;
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //rowArranger(row1, row2, row3);
        }
        else if((row1[2] == 1) && (row2[2] != row1[2]) && (row3[2] != row1[2])){
            temp = row3;
            row3 = row1;
            row1 = temp;
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //rowArranger(row1, row2, row3);
        }
        else if((row2[2] == 1) && (row2[2] != row1[2]) && (row2[2] != row3[2])){
            temp = row3;
            row3 = row2; 
            row2 = temp;
            console.log("Row Arranger");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            //rowArranger(row1, row2, row3);
        }
        //returning all of the row arrays to be used in the next function
        returnRows = [];
        returnRows[0] = row1;
        returnRows[1] = row2;
        returnRows[2] = row3;
        return returnRows;
    };
    
    //change name to column 1 negator
    function rowNegator(row1, row2, row3){
        if((row1[0] == 1) && (row3[0] != 0 || row1[0] == row3[0])){
            negRow1 = []; //this will create another temporary array to perfrom operations on
            negRow1[0] = (-1 * row3[0]) * row1[0]; //negates the value in position 0 of row 3 and multiplies by LCM
            negRow1[1] = (-1 * row3[0]) * row1[1];
            negRow1[2] = (-1 * row3[0]) * row1[2];
            newRow3 = [];
            newRow3[0] = row3[0] + negRow1[0]; //cancels out data in array position zero
            newRow3[1] = row3[1] + negRow1[1]; //adds negRow[1] to row3[1] to stay consistent
            newRow3[2] = row3[2] + negRow1[2]; // see above
            row3[0] = newRow3[0];
            row3[1] = newRow3[1];
            row3[2] = newRow3[2]; //sets row3 to new cancelled row
            console.log("Row Negator");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            rowNegator(row1, row2, row3);
        }
        else if((row1[0] == 1) && (row2[0] != 0 || row1[0] == row2[0])){
            negRow1 = [];
            negRow1[0] = (-1 * row2[0]) * row1[0];
            negRow1[1] = (-1 * row2[0]) * row1[1];
            negRow1[2] = (-1 * row2[0]) * row1[2];
            newRow2 = [];
            newRow2[0] = row2[0] + negRow1[0];
            newRow2[1] = row2[1] + negRow1[1];
            newRow2[2] = row2[2] + negRow1[2];
            row2[0] = newRow2[0];
            row2[1] = newRow2[1];
            row2[2] = newRow2[2];
            console.log("Row Negator");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            rowNegator(row1, row2, row3);
        }
        returnRows = [];
        returnRows[0] = row1;
        returnRows[1] = row2;
        returnRows[2] = row3;
        return returnRows;
    }

    function rowArithmetic(row1, row2, row3){
        if((row2[0] == 0) && (row1[0] != 0) && (row1[1] != 0))
        {   
            console.log("Before Arithmetic: " + row2);
            multRow1 = [];
            multRow2 = [];
            /* this next step is important. its important that the multiplied versions of row 1 and row 2 are 
            of opposite sign, so that when added together, row1[1] cancels out */ 
            if((row1[1] < 0 && row2[1] > 0) || (row1[1] > 0 && row2[1] < 0)){
                
                multRow1[0] = ((-1 * row2[1]) * row1[0]);
                multRow1[1] = ((-1 * row2[1]) * row1[1]); 
                multRow1[2] = ((-1 * row2[1]) * row1[2]);
                multRow2[0] = (row1[1] * row2[0]);
                multRow2[1] = (row1[1] * row2[1]);
                multRow2[2] = (row1[1] * row2[2]);
            }
            
            else{
                multRow1[0] = ((row2[1] * row1[0]));
                multRow1[1] = ((row2[1] * row1[1])); 
                multRow1[2] = ((row2[1] * row1[2]));
                multRow2[0] = (row1[1] * row2[0]);
                multRow2[1] = (row1[1] * row2[1]);
                multRow2[2] = (row1[1] * row2[2]);
            }
            
            row1[0] = multRow1[0] + multRow2[0];
            row1[1] = multRow1[1] + multRow2[1];
            row1[2] = multRow1[2] + multRow2[2];
            console.log("Fixing Row 1");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            
        }
        
        if((row2[0] == 0) && (row3[1] != 0)){
            multRow3 = [];
            multRow2 = [];
            
            if((row3[1] > 0 && row2[1] > 0) || (row3[1] < 0 && row2[1] < 0)){
                multRow3[0] = (-1 * row2[1] * row3[0]);
                multRow3[1] = (-1 * row2[1] * row3[1]);
                multRow3[2] = (-1 * row2[1] * row3[2]);
                multRow2[0] = (row3[1] * row2[0]);
                multRow2[1] = (row3[1] * row2[1]);
                multRow2[2] = (row3[1] * row2[2]);
            }
            else{
                multRow3[0] = (row2[1] * row3[0]);
                multRow3[1] = (row2[1] * row3[1]);
                multRow3[2] = (row2[1] * row3[2]);
                multRow2[0] = (row3[1] * row2[0]);
                multRow2[1] = (row3[1] * row2[1]);
                multRow2[2] = (row3[1] * row2[2]);
            }
            row3[0] = multRow3[0] + multRow2[0];
            row3[1] = multRow3[1] + multRow2[1];
            row3[2] = multRow3[2] + multRow2[2];
            console.log("Fixing Row 3");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(" ");
            
        }
        returnRows = [];
        returnRows[0] = row1;
        returnRows[1] = row2;
        returnRows[2] = row3;
        return returnRows;
    };


    var rowDiv1 = "row1";
    var row1obj = new Row(7, -8, 9, rowDiv1);
    var row1 = row1obj.makeArray();
    row1obj.printArray();

    var rowDiv2 = "row2";
    var row2obj = new Row(1, 6, 7, rowDiv2);
    var row2 = row2obj.makeArray();
    row2obj.printArray();

    var rowDiv3 = "row3";
    var row3obj = new Row(4, 5, 6, rowDiv3);
    var row3 = row3obj.makeArray();
    row3obj.printArray();

    cancelRows = rowCanceller(row1, row2, row3);

    var arrangedRows = rowArranger(row1, row2, row3);
    newRow1 = arrangedRows[0];
    newRow2 = arrangedRows[1];
    newRow3 = arrangedRows[2];
    
    var negateRows = rowNegator(newRow1, newRow2, newRow3);
    negatedrow1 = negateRows[0];
    negatedrow2 = negateRows[1]; 
    negatedrow3 = negateRows[2];

    var arithRows = rowArithmetic(negatedrow1, negatedrow2, negatedrow3);
    arRow1 = arithRows[0];
    arRow2 = arithRows[1];
    arRow3 = arithRows[2];
    console.log("Final Row 1: " + arRow1);
    console.log("Final Row 2: " + arRow2);
    console.log("Final Row 3: " + arRow3);
     
});