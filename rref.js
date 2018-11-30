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
    /*The goal of putting a coefficient matrix into reduced row echelon form is to be able to cancel out two of the variables
    in each row, and rearrange them so that one of your variables from each line will equal one, and the other two variables will equal zero. 
    as this is a 3x3 matrix example, it is meant to
    simulate the equation of a plane. So you will end up with x = some number, y = some number, z = some number. for example, we 
    would want to turn this matrix: 
            1 2 3
            5 7 8
            8 9 1
    
    into this matrix:
            1 0 0
            0 1 0
            0 0 1

    so if the first matrix simplified into the second one, we could say that the x value in the first column, first row would equal some number
    the y value in the second column, second row equals some number.
    the z value in the third column, third row equals some number.
    */ 
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
    
    function rowArithmetic(row1, row2, row3){
        if((row1[0] == 1) && ((row3[0] != 0) || (row1[0] == row3[0]))){
            negRow1 = [];
            negRow1[0] = (-1 * row3[0]) * row1[0];
            negRow1[1] = (-1 * row3[0]) * row1[1];
            negRow1[2] = (-1 * row3[0]) * row1[2];
            newRow3 = [];
            newRow3[0] = row3[0] + negRow1[0];
            newRow3[1] = row3[1] + negRow1[1];
            newRow3[2] = row3[2] + negRow1[2];
            row3 = newRow3;
            console.log("Row Arithmetic");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            rowArithmetic(row1, row2, row3);
        }
        else if((row1[0] == 1) && ((row2[0] != 0) || row1[0] == row2[0])){
            negRow1 = [];
            negRow1[0] = (-1 * row2[0]) * row1[0];
            negRow1[1] = (-1 * row2[0]) * row1[1];
            negRow1[2] = (-1 * row2[0]) * row1[2];
            newRow2 = [];
            newRow2[0] = row2[0] + negRow1[0];
            newRow2[1] = row2[1] + negRow1[1];
            newRow2[2] = row2[2] + negRow1[2];
            row2 = newRow2;
            console.log("Row Arithmetic");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            rowArithmetic(row1, row2, row3);
        }
    };

    var rowDiv1 = "row1";
    var row1obj = new Row(1, -3, 4, rowDiv1);
    var row1 = row1obj.makeArray();
    row1obj.printArray();

    var rowDiv2 = "row2";
    var row2obj = new Row(19, 7, 0, rowDiv2);
    var row2 = row2obj.makeArray();
    row2obj.printArray();

    var rowDiv3 = "row3";
    var row3obj = new Row(3, 1, 6, rowDiv3);
    var row3 = row3obj.makeArray();
    row3obj.printArray();

    cancelRows = rowCanceller(row1, row2, row3);
    var appendedRows = rowArranger(row1, row2, row3);
    newRow1 = appendedRows[0];
    newRow2 = appendedRows[1];
    newRow3 = appendedRows[2];
    
    arith = rowArithmetic(newRow1, newRow2, newRow3);
    
});