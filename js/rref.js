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
    }
    /* if row1[0] == 0, row2[1] == 0, or row3[2] == 0 this would present problems in the execution of the rowArithmetic function. because of this,
    this function will switch positions with one of the other rows, if the rows meet the following conditions and are able to be switched. */
    function rowArranger(row1, row2, row3){
        if(row1[0] == 0){
            //these will take care of the simple cases of only needing to exchange rows once 
            //comparing row 1 and row 2
            if(row1[1] != 0 && row2[0] != 0){
                temp = row1;
                row1 = row2; // exchanges row 1 with row 2
                row2 = temp;
            }
            //comparing row 1 and row 3
            else if(row1[2] != 0 && row3[0] != 0){
                temp = row1;
                row1 = row3; // exchanges row 1 with row 3
                row3 = temp;
            }
            //the following executes if two row exchanges are needed
            else if(row1[2] != 0 && row2[0] != 0 && row3[1] != 0){
                temp = row1;
                row1 = row2;
                row2 = temp;

                temp2 = row2;
                row2 = row3;
                row3 = temp2;
            }
            
        }
        if(row2[1] == 0){
            //comparing row 2 and row 3
            if(row3[1] != 0 && row2[2] != 0){
                temp = row2;
                row2 = row3;
                row3 = temp;
            }
            //comparing row2 and row 1
            else if(row1[1] != 0 && row2[0] != 0){
                temp = row2;
                row2 = row1;
                row1 = temp;
            }
            
            //this also executes if two row exchanges are needed
            else if(row1[1] != 0 && row2[2] != 0 && row3[0] != 0){
                temp = row1;
                row1 = row2;
                row2 = temp;
                
                temp2 = row3;
                row3 = row1;
                row1 = temp2;
            }
        }
        if(row3[2] == 0){
            if(row3[0] != 0 && row1[2] != 0){
                temp = row3;
                row3 = row1;
                row1 = temp;
            }
            else if(row3[1] != 0 && row2[2] != 0){
                temp = row3;
                row3 = row2; 
                row2 = temp; 
            }
        }
        //checking to see if rows 1 or 2 are composed of all zeroes. if possible, this row will be exchanged with row 3
        if(row1[0] == 0 && row2[1] == 0 && row3[2] == 0){
            if(row1[0] == 0 && row1[1] == 0 && row1[2] == 0){
                if(row3[0] != 0){
                    temp = row3;
                    row3 = row1; 
                    row1 = temp;
                }
            }
            if(row2[0] == 0 && row2[1] == 0 && row2[2] == 0){
                if(row3[1] != 0){
                    temp = row2;
                    row2 = row3;
                    row3 = temp;
                }
            }
        }
        //returning all of the row arrays as a 2 dimensional array to be used in the next function
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        return newRows;
    };
    /* the following function consists of many repetitive if/else if statements to cancel out coefficients in each row */
    function rowArithmetic(row1, row2, row3){
        //this clears column one by cancelling row2[0] by multiplying row1 and row2 by a common multiple and adding them 
        if(row1[0] != 0 && row2[0] != 0){
            multRow1 = [];
            multRow2 = [];
            if(row1[0] < 0 && row2[0] < 0){
                multRow1[0] = (-1 * row2[0] * row1[0]);
                multRow1[1] = (-1 * row2[0] * row1[1]);
                multRow1[2] = (-1 * row2[0] * row1[2]);
                multRow2[0] = row1[0] * row2[0];
                multRow2[1] = row1[0] * row2[1];
                multRow2[2] = row1[0] * row2[2];
            }
            else if(row1[0] > 0 && row2[0] > 0){
                //for them to cancel, one has to be negative and one has to be positive
                multRow1[0] = (-1 * row2[0] * row1[0]);
                multRow1[1] = (-1 * row2[0] * row1[1]);
                multRow1[2] = (-1 * row2[0] * row1[2]);
                multRow2[0] = row1[0] * row2[0];
                multRow2[1] = row1[0] * row2[1];
                multRow2[2] = row1[0] * row2[2];
            }
            else if(row1[0] < 0 && row2[0] > 0){
                //row1[0] is already negative
                multRow1[0] = row2[0] * row1[0];
                multRow1[1] = row2[0] * row1[1];
                multRow1[2] = row2[0] * row1[2];
                multRow2[0] = -1 * row1[0] * row2[0];
                multRow2[1] = -1 * row1[0] * row2[1];
                multRow2[2] = -1 * row1[0] * row2[2];
            }
            else if(row1[0] > 0 && row2[0] < 0){
                multRow1[0] = -1 * row2[0] * row1[0];
                multRow1[1] = -1 * row2[0] * row1[1];
                multRow1[2] = -1 * row2[0] * row1[2];
                multRow2[0] = row1[0] * row2[0];
                multRow2[1] = row1[0] * row2[1];
                multRow2[2] = row1[0] * row2[2];
            }
            row2[0] = multRow1[0] + multRow2[0];
            row2[1] = multRow1[1] + multRow2[1];
            row2[2] = multRow1[2] + multRow2[2];
            console.log("cancelling column 1, row2");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
        }
        //this does the same as above, but with row3 and row1
        if(row1[0] != 0 && row3[0] != 0){
            multRow1 = [];
            multRow3 = [];
            if(row1[0] < 0 && row3[0] < 0){
                multRow1[0] = (-1 * row3[0] * row1[0]);
                multRow1[1] = (-1 * row3[0] * row1[1]);
                multRow1[2] = (-1 * row3[0] * row1[2]);
                multRow3[0] = row1[0] * row3[0];
                multRow3[1] = row1[0] * row3[1];
                multRow3[2] = row1[0] * row3[2];
            }
            else if(row1[0] > 0 && row3[0] > 0){
                //for them to cancel, one has to be negative and one has to be positive
                multRow1[0] = (-1 * row3[0] * row1[0]);
                multRow1[1] = (-1 * row3[0] * row1[1]);
                multRow1[2] = (-1 * row3[0] * row1[2]);
                multRow3[0] = row1[0] * row3[0];
                multRow3[1] = row1[0] * row3[1];
                multRow3[2] = row1[0] * row3[2];
            }
            else if(row1[0] < 0 && row3[0] > 0){
                //row1[0] is already negative
                multRow1[0] = row3[0] * row1[0];
                multRow1[1] = row3[0] * row1[1];
                multRow1[2] = row3[0] * row1[2];
                multRow3[0] = -1 * row1[0] * row3[0];
                multRow3[1] = -1 * row1[0] * row3[1];
                multRow3[2] = -1 * row1[0] * row3[2];
            }
            else if(row1[0] > 0 && row3[0] < 0){
                multRow1[0] = -1 * row3[0] * row1[0];
                multRow1[1] = -1 * row3[0] * row1[1];
                multRow1[2] = -1 * row3[0] * row1[2];
                multRow3[0] = row1[0] * row3[0];
                multRow3[1] = row1[0] * row3[1];
                multRow3[2] = row1[0] * row3[2];
            }
            row3[0] = multRow1[0] + multRow3[0];
            row3[1] = multRow1[1] + multRow3[1];
            row3[2] = multRow1[2] + multRow3[2];
            console.log("Cancelling column 1, row3");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
        }
        //this will cancel row1[1] by multiplying row 1 and row 2 by a common multiple and adding them
        if((row2[0] == 0) && (row1[0] != 0) && (row1[1] != 0) && row2[1] != 0)
        {   
            multRow1 = [];
            multRow2 = [];
            //this next step is important. its important that the multiplied versions of row 1 and row 2 are 
            //of opposite sign, so that when added together, row1[1] cancels out
            if(row1[1] < 0 && row2[1] < 0){
                //multRow1[1] is going to always be negative, multRow2[1] always positive
                multRow1[0] = -1 * row2[1] * row1[0];
                multRow1[1] = -1 * row2[1] * row1[1];
                multRow1[2] = -1 * row2[1] * row1[2];
                
                multRow2[0] = row1[1] * row2[0];
                multRow2[1] = row1[1] * row2[1];
                multRow2[2] = row1[1] * row2[2];
            }
            else if(row1[1] > 0 && row2[1] > 0){
                multRow1[0] = -1 * row2[1] * row1[0];
                multRow1[1] = -1 * row2[1] * row1[1];
                multRow1[2] = -1 * row2[1] * row1[2];
                
                multRow2[0] = row1[1] * row2[0];
                multRow2[1] = row1[1] * row2[1];
                multRow2[2] = row1[1] * row2[2];
            }
            else if(row1[1] > 0 && row2[1] < 0){
                multRow1[0] = row2[1] * row1[0];
                multRow1[1] = row2[1] * row1[1];
                multRow1[2] = row2[1] * row1[2];
                
                multRow2[0] = -1 * row1[1] * row2[0];
                multRow2[1] = -1 * row1[1] * row2[1];
                multRow2[2] = -1 * row1[1] * row2[2];
            }
            else if(row1[1] < 0 && row2[1] > 0){
                multRow1[0] = row2[1] * row1[0];
                multRow1[1] = row2[1] * row1[1];
                multRow1[2] = row2[1] * row1[2];
                
                multRow2[0] = -1 * row1[1] * row2[0];
                multRow2[1] = -1 * row1[1] * row2[1];
                multRow2[2] = -1 * row1[1] * row2[2];
            }
            row1[0] = multRow1[0] + multRow2[0];
            row1[1] = multRow1[1] + multRow2[1];
            row1[2] = multRow1[2] + multRow2[2];
            console.log("cancelling column 2, row 1");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);

        }
        //added the final statement: row2[1] == 0 because this was executing and returning NaN's in certain test cases
        if((row2[0] == 0) && (row3[1] != 0) && (row3[2] != 0) && row2[1] != 0){
            multRow3 = [];
            multRow2 = [];
            //multRow3[1] always negative, multRow2[1] always positive
            if(row2[1] < 0 && row3[1] < 0){
                multRow3[0] = -1 * row2[1] * row3[0];
                multRow3[1] = -1 * row2[1] * row3[1];
                multRow3[2] = -1 * row2[1] * row3[2];
                
                multRow2[0] = row3[1] * row2[0];
                multRow2[1] = row3[1] * row2[1];
                multRow2[2] = row3[1] * row2[2];
            }
            else if(row2[1] > 0 && row3[1] > 0){
                multRow3[0] = -1 * row2[1] * row3[0];
                multRow3[1] = -1 * row2[1] * row3[1];
                multRow3[2] = -1 * row2[1] * row3[2];
                
                multRow2[0] = row3[1] * row2[0];
                multRow2[1] = row3[1] * row2[1];
                multRow2[2] = row3[1] * row2[2];
            }
            else if(row2[1] < 0 && row3[1] > 0){
                multRow3[0] = row2[1] * row3[0];
                multRow3[1] = row2[1] * row3[1];
                multRow3[2] = row2[1] * row3[2];
                
                multRow2[0] = -1 * row3[1] * row2[0];
                multRow2[1] = -1 * row3[1] * row2[1];
                multRow2[2] = -1 * row3[1] * row2[2];
            }
            else if(row2[1] > 0 && row3[1] < 0){
                multRow3[0] = row2[1] * row3[0];
                multRow3[1] = row2[1] * row3[1];
                multRow3[2] = row2[1] * row3[2];
                
                multRow2[0] = -1 * row3[1] * row2[0];
                multRow2[1] = -1 * row3[1] * row2[1];
                multRow2[2] = -1 * row3[1] * row2[2];
            }
            row3[0] = multRow3[0] + multRow2[0];
            row3[1] = multRow3[1] + multRow2[1];
            row3[2] = multRow3[2] + multRow2[2];
            console.log("cancelling column 2, row 3");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(" ");
        }

        
        //this cancels row2[2] if the following condition is met
        if(row3[0] == 0 && row3[1] == 0 && row3[2] != 0 && row2[2] != 0){
            multRow3 = [];
            multRow2 = [];
            //multRow2[2] always negative, multRow3[2] always positive
            if(row3[2] < 0 && row2[2] < 0){
                multRow2[0] = -1 * row3[2] * row2[0];
                multRow2[1] = -1 * row3[2] * row2[1];
                multRow2[2] = -1 * row3[2] * row2[2];

                multRow3[0] = row2[2] * row3[0];
                multRow3[1] = row2[2] * row3[1];
                multRow3[2] = row2[2] * row3[2];
            }
            else if(row3[2] > 0 && row2[2] > 0){
                multRow2[0] = -1 * row3[2] * row2[0];
                multRow2[1] = -1 * row3[2] * row2[1];
                multRow2[2] = -1 * row3[2] * row2[2];

                multRow3[0] = row2[2] * row3[0];
                multRow3[1] = row2[2] * row3[1];
                multRow3[2] = row2[2] * row3[2];
            }
            else if(row3[2] > 0 && row2[2] < 0){
                multRow2[0] = row3[2] * row2[0];
                multRow2[1] = row3[2] * row2[1];
                multRow2[2] = row3[2] * row2[2];

                multRow3[0] = -1 * row2[2] * row3[0];
                multRow3[1] = -1 * row2[2] * row3[1];
                multRow3[2] = -1 * row2[2] * row3[2];
            }
            else if(row3[2] < 0 && row2[2] > 0){
                multRow2[0] = row3[2] * row2[0];
                multRow2[1] = row3[2] * row2[1];
                multRow2[2] = row3[2] * row2[2];

                multRow3[0] = -1 * row2[2] * row3[0];
                multRow3[1] = -1 * row2[2] * row3[1];
                multRow3[2] = -1 * row2[2] * row3[2];
            } 
            row2[0] = multRow3[0] + multRow2[0];
            row2[1] = multRow3[1] + multRow2[1];
            row2[2] = multRow3[2] + multRow2[2];
            console.log("cancelling column 3, row 2");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(" ");
        }
        if(row3[0] == 0 && row3[1] == 0 && row3[2] != 0 && row1[2] != 0){
            multRow3 = [];
            multRow1 = [];
            //multRow1[2] always negative, multRow3[2] always positive
            if(row3[2] < 0 && row1[2] < 0){
                multRow1[0] = -1 * row3[2] * row1[0];
                multRow1[1] = -1 * row3[2] * row1[1];
                multRow1[2] = -1 * row3[2] * row1[2];

                multRow3[0] = row1[2] * row3[0];
                multRow3[1] = row1[2] * row3[1];
                multRow3[2] = row1[2] * row3[2];
            }
            else if(row3[2] > 0 && row1[2] > 0){
                multRow1[0] = -1 * row3[2] * row1[0];
                multRow1[1] = -1 * row3[2] * row1[1];
                multRow1[2] = -1 * row3[2] * row1[2];

                multRow3[0] = row1[2] * row3[0];
                multRow3[1] = row1[2] * row3[1];
                multRow3[2] = row1[2] * row3[2];
            }
            else if(row3[2] > 0 && row1[2] < 0){
                multRow1[0] = row3[2] * row1[0];
                multRow1[1] = row3[2] * row1[1];
                multRow1[2] = row3[2] * row1[2];

                multRow3[0] = -1 * row1[2] * row3[0];
                multRow3[1] = -1 * row1[2] * row3[1];
                multRow3[2] = -1 * row1[2] * row3[2];
            }
            else if(row3[2] < 0 && row1[2] > 0){
                multRow1[0] = row3[2] * row1[0];
                multRow1[1] = row3[2] * row1[1];
                multRow1[2] = row3[2] * row1[2];

                multRow3[0] = -1 * row1[2] * row3[0];
                multRow3[1] = -1 * row1[2] * row3[1];
                multRow3[2] = -1 * row1[2] * row3[2];
            }
            row1[0] = multRow1[0] + multRow3[0];
            row1[1] = multRow1[1] + multRow3[1];
            row1[2] = multRow1[2] + multRow3[2];
            console.log("cancelling column 3, row 1");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(" ");
        }
        //returns the reduced rows 
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        return newRows;
    }
    /*this function will check to see if all three rows are in accordance with the reduction rules. 
    if they are, then the matrix will be simplified into a reduced matrix by converting the singular numerical value in each row to 1 */
    function rowReducer(row1, row2, row3){
        if(row1[0] != 0 && row1[1] == 0 && row1[2] == 0){
            row1[0] = 1;
        }
        if(row2[0] == 0 && row2[1] != 0 && row2[2] == 0){
            row2[1] = 1;
        }
        if(row3[0] == 0 && row3[1] == 0 && row3[2] != 0){
            row3[2] = 1;
        }
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        return newRows;
    }

    var rowDiv1 = "row1";
    var row1obj = new Row(1, 0, 0, rowDiv1);
    var row1 = row1obj.makeArray();
    row1obj.printArray();

    var rowDiv2 = "row2";
    var row2obj = new Row(1, 0, 0, rowDiv2);
    var row2 = row2obj.makeArray();
    row2obj.printArray();

    var rowDiv3 = "row3";
    var row3obj = new Row(2, 1, 0, rowDiv3);
    var row3 = row3obj.makeArray();
    row3obj.printArray();

    console.log("row1: " + row1);
    console.log("row2: " + row2);
    console.log("row3: " + row3);
    
    var arithRows = rowArithmetic(row1, row2, row3);
    row1 = arithRows[0];
    row2 = arithRows[1];
    row3 = arithRows[2];
    console.log("row1: " + row1);
    console.log("row2: " + row2);
    console.log("row3: " + row3);
    console.log("calling Row Arranger");
    /* After calling row arithmetic, row arranger looks to see if any of the rows could be arranged. this is necessary as if a row is done reducing, but is out of order, 
    it will not fully complete execution. */
    var arrangedRows = rowArranger(row1, row2, row3);
    row1 = arrangedRows[0];
    row2 = arrangedRows[1];
    row3 = arrangedRows[2];
    
    console.log("row1: " + row1);
    console.log("row2: " + row2);
    console.log("row3: " + row3);
    console.log("calling Row Arithmetic again");

    var arithRows2 = rowArithmetic(row1, row2, row3);
    row1 = arithRows2[0];
    row2 = arithRows2[1];
    row3 = arithRows2[2];

    var reducedRows = rowReducer(row1, row2, row3);
    row1 = reducedRows[0];
    row2 = reducedRows[1];
    row3 = reducedRows[2];
    console.log("Final Row 1: " + row1);
    console.log("Final Row 2: " + row2);
    console.log("Final Row 3: " + row3);


});