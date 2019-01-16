$(document).ready(function () {
    $('#calcRref').click(calculateRref);
    //creating a Row class to easily create a row from an input of 3 strings
    function Row(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // this.divID = divID;

        this.makeRow = function () {
            //parsing strings into integers
            intX = parseInt(x);
            intY = parseInt(y);
            intZ = parseInt(z);
            rowArr = [intX, intY, intZ];
            return rowArr;
        };
        this.printRow = function () {
            var newString = rowArr[0] + " " + rowArr[1] + " " + rowArr[2];
            var eloutput = document.getElementById(divID);
            output = newString;
            eloutput.textContent = output;
        };
    }
    /* if row1[0] == 0, row2[1] == 0, or row3[2] == 0 this would present problems in the execution of the rowArithmetic function. because of this,
    this function will switch positions with one of the other rows, if the rows meet the following conditions and are able to be switched. */
    function rowArranger(row1, row2, row3, i, step) {

        if (row1[0] == 0) {
            //these will take care of the simple cases of only needing to exchange rows once 
            //comparing row 1 and row 2
            if (row1[1] != 0 && row2[0] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 1 with row 2 to get:";
                temp = row1;
                row1 = row2; // exchanges row 1 with row 2
                row2 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
            //comparing row 1 and row 3
            else if (row1[2] != 0 && row3[0] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 1 with row 3 to get:";
                temp = row1;
                row1 = row3; // exchanges row 1 with row 3
                row3 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
            //the following executes if two row exchanges are needed
            else if (row1[2] != 0 && row2[0] != 0 && row3[1] != 0) {
                i++;
                step = step + "\nstep " + i + "\ntwo row exchanges are needed. first exchange row 1 with row 2 to get:";
                temp = row1;
                row1 = row2;
                row2 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

                step = step + "\nand exchange row 2 with row 3 to get:";
                temp2 = row2;
                row2 = row3;
                row3 = temp2;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }

        }
        if (row2[1] == 0) {
            //comparing row 2 and row 3
            if (row3[1] != 0 && row2[2] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 2 with row 3 to get:";
                temp = row2;
                row2 = row3;
                row3 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
            //comparing row2 and row 1
            else if (row1[1] != 0 && row2[0] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 2 with row 1 to get:";
                temp = row2;
                row2 = row1;
                row1 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }

            //this also executes if two row exchanges are needed
            else if (row1[1] != 0 && row2[2] != 0 && row3[0] != 0) {
                i++;
                step = step + "\nstep " + i + "\ntwo row exchanges are needed. first exchange row 1 with row 2 to get:";
                temp = row1;
                row1 = row2;
                row2 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

                step = step + "\nand exchange row 3 with row 1 to get:";
                temp2 = row3;
                row3 = row1;
                row1 = temp2;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
        }
        if (row3[2] == 0) {
            if (row3[0] != 0 && row1[2] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 3 with row 1 to get:";
                temp = row3;
                row3 = row1;
                row1 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
            else if (row3[1] != 0 && row2[2] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 3 with row 2 to get:";
                temp = row3;
                row3 = row2;
                row2 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
        }
        //checking to see if rows 1 or 2 are composed of all zeroes. if possible, this row will be exchanged with row 3
        if (row1[0] == 0 && row1[1] == 0 && row1[2] == 0) {
            if (row3[0] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 3 with row 1 to get:";
                temp = row3;
                row3 = row1;
                row1 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
        }
        if (row2[0] == 0 && row2[1] == 0 && row2[2] == 0) {
            if (row3[1] != 0) {
                i++;
                step = step + "\nstep " + i + "\nexchange row 3 with row 2 to get:";
                temp = row2;
                row2 = row3;
                row3 = temp;
                step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            }
        }
        //returning all of the row arrays as a 2 dimensional array to be used in the next function
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        newRows[3] = i;
        newRows[4] = step;
        return newRows;
    };
    /* the following function consists of many repetitive if/else if statements to cancel out coefficients in each row.
    in each if statement, each row is multiplied by the value of the row position of the other row it is being evaluated to, and then
    both rows are added to each other so one value can cancel, if possible. */
    function rowArithmetic(row1, row2, row3, i, step) {
        //this clears column one by cancelling row2[0] by multiplying row1 and row2 by a common multiple and adding them 
        if (row1[0] != 0 && row2[0] != 0) {
            i++; //incrementing i
            multRow1 = [];
            multRow2 = [];

            multRow1[0] = -1 * row2[0] * row1[0];
            multRow1[1] = -1 * row2[0] * row1[1];
            multRow1[2] = -1 * row2[0] * row1[2];

            multRow2[0] = row1[0] * row2[0];
            multRow2[1] = row1[0] * row2[1];
            multRow2[2] = row1[0] * row2[2];
            //creating an informative message to describe what is happening in this step.
            step = step + "\nstep " + i + ":\nmultiply row 1 by " + row2[0] + "\nmultiply row 2 by " + row1[0] + "\nadd row 1 to row 2 to get:";

            row2[0] = multRow1[0] + multRow2[0];
            row2[1] = multRow1[1] + multRow2[1];
            row2[2] = multRow1[2] + multRow2[2];

            //adding onto the step variable here to display the new values for row2
            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
            console.log("cancelling column 1, row2");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(step);
        }
        //this does the same as above, but with row3 and row1
        if (row1[0] != 0 && row3[0] != 0) {
            i++;
            multRow1 = [];
            multRow3 = [];

            multRow1[0] = (-1 * row3[0] * row1[0]);
            multRow1[1] = (-1 * row3[0] * row1[1]);
            multRow1[2] = (-1 * row3[0] * row1[2]);

            multRow3[0] = row1[0] * row3[0];
            multRow3[1] = row1[0] * row3[1];
            multRow3[2] = row1[0] * row3[2];

            step = step + "\nstep " + i + ":\nmultiply row 1 by " + row3[0] + "\nmultiply row 3 by " + row1[0] + "\nadd row 1 to row 3 to get:";

            row3[0] = multRow1[0] + multRow3[0];
            row3[1] = multRow1[1] + multRow3[1];
            row3[2] = multRow1[2] + multRow3[2];

            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

            console.log("Cancelling column 1, row3");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(step);
        }
        //this will cancel row1[1] by multiplying row 1 and row 2 by a common multiple and adding them
        if ((row2[0] == 0) && (row1[0] != 0) && (row1[1] != 0) && row2[1] != 0) {
            i++;
            multRow1 = [];
            multRow2 = [];

            multRow1[0] = -1 * row2[1] * row1[0];
            multRow1[1] = -1 * row2[1] * row1[1];
            multRow1[2] = -1 * row2[1] * row1[2];

            multRow2[0] = row1[1] * row2[0];
            multRow2[1] = row1[1] * row2[1];
            multRow2[2] = row1[1] * row2[2];

            step = step + "\nstep " + i + ":\nmultiply row 1 by " + row2[1] + "\nmultiply row 2 by " + row1[1] + "\nadd row 2 to row 1 to get:";

            row1[0] = multRow1[0] + multRow2[0];
            row1[1] = multRow1[1] + multRow2[1];
            row1[2] = multRow1[2] + multRow2[2];

            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

            console.log("cancelling column 2, row 1");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(step);

        }
        //added the final statement: row2[1] == 0 because this was executing and returning NaN's in certain test cases (row3[2] != 0) &&
        if ((row2[0] == 0) && (row3[1] != 0) && row2[1] != 0) {
            i++;
            multRow3 = [];
            multRow2 = [];

            multRow3[0] = -1 * row2[1] * row3[0];
            multRow3[1] = -1 * row2[1] * row3[1];
            multRow3[2] = -1 * row2[1] * row3[2];

            multRow2[0] = row3[1] * row2[0];
            multRow2[1] = row3[1] * row2[1];
            multRow2[2] = row3[1] * row2[2];

            step = step + "\nstep " + i + ":\nmultiply row 2 by " + row3[1] + "\nmultiply row 3 by " + row2[1] + "\nadd row 2 to row 3 to get:";

            row3[0] = multRow3[0] + multRow2[0];
            row3[1] = multRow3[1] + multRow2[1];
            row3[2] = multRow3[2] + multRow2[2];

            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

            console.log("cancelling column 2, row 3");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(step);
        }


        //this cancels row2[2] if the following condition is met
        if (row3[0] == 0 && row3[1] == 0 && row3[2] != 0 && row2[2] != 0) {
            i++;
            multRow3 = [];
            multRow2 = [];

            multRow2[0] = -1 * row3[2] * row2[0];
            multRow2[1] = -1 * row3[2] * row2[1];
            multRow2[2] = -1 * row3[2] * row2[2];

            multRow3[0] = row2[2] * row3[0];
            multRow3[1] = row2[2] * row3[1];
            multRow3[2] = row2[2] * row3[2];

            step = step + "\nstep " + i + ":\nmultiply row 2 by " + row3[2] + "\nmultiply row 3 by " + row2[2] + "\nadd row 3 to row 2 to get:";

            row2[0] = multRow3[0] + multRow2[0];
            row2[1] = multRow3[1] + multRow2[1];
            row2[2] = multRow3[2] + multRow2[2];

            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

            console.log("cancelling column 3, row 2");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log(step);
        }
        if (row3[0] == 0 && row3[1] == 0 && row3[2] != 0 && row1[2] != 0) {
            i++;
            multRow3 = [];
            multRow1 = [];

            multRow1[0] = -1 * row3[2] * row1[0];
            multRow1[1] = -1 * row3[2] * row1[1];
            multRow1[2] = -1 * row3[2] * row1[2];

            multRow3[0] = row1[2] * row3[0];
            multRow3[1] = row1[2] * row3[1];
            multRow3[2] = row1[2] * row3[2];

            step = step + "\nstep " + i + ":\nmultiply row 1 by " + row3[2] + "\nmultiply row 3 by " + row1[2] + "\nadd row 3 to row 1 to get:";

            row1[0] = multRow1[0] + multRow3[0];
            row1[1] = multRow1[1] + multRow3[1];
            row1[2] = multRow1[2] + multRow3[2];

            step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";

            console.log("cancelling column 3, row 1");
            console.log("Row 1: " + row1);
            console.log("Row 2: " + row2);
            console.log("Row 3: " + row3);
            console.log("i: " + i);
            console.log(" ");
        }
        //returns the reduced rows 
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        newRows[3] = i;
        newRows[4] = step;
        return newRows;
    }
    /*this function will check to see if all three rows are in accordance with the reduction rules. 
    if they are, then the matrix will be simplified into a reduced matrix by converting the singular numerical value in each row to 1 */
    function rowReducer(row1, row2, row3, i, step) {
        //in other words, if any of the rows only contain one value then that value becomes 1
        i++;
        step = step + "\nstep " + i + "\nreducing rows:"
        if (row1[0] != 0 && row1[1] == 0 && row1[2] == 0) {
            row1[0] = 1;
        }
        if (row2[0] == 0 && row2[1] != 0 && row2[2] == 0) {
            row2[1] = 1;
        }
        if (row3[0] == 0 && row3[1] == 0 && row3[2] != 0) {
            row3[2] = 1;
        }
        step = step + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n";
        newRows = [];
        newRows[0] = row1;
        newRows[1] = row2;
        newRows[2] = row3;
        newRows[3] = i;
        newRows[4] = step;
        return newRows;
    }

    function calculateRref() {
        var row1Pos1 = $('#row1Pos1').val();
        var row1Pos2 = $('#row1Pos2').val();
        var row1Pos3 = $('#row1Pos3').val();
       
        var row2Pos1 = $('#row2Pos1').val();
        var row2Pos2 = $('#row2Pos2').val();
        var row2Pos3 = $('#row2Pos3').val();

        var row3Pos1 = $('#row3Pos1').val();
        var row3Pos2 = $('#row3Pos2').val();
        var row3Pos3 = $('#row3Pos3').val();

        var row1obj = new Row(row1Pos1, row1Pos2, row1Pos3);
        var row1 = row1obj.makeRow();

        var row2obj = new Row(row2Pos1, row2Pos2, row2Pos3);
        var row2 = row2obj.makeRow();

        var row3obj = new Row(row3Pos1, row3Pos2, row3Pos3);
        var row3 = row3obj.makeRow();


        console.log("row1: " + row1);
        console.log("row2: " + row2);
        console.log("row3: " + row3);

        //i is passed into the functions to keep track of which step the reduction is on
        var i = 0;

        //step is passed into the functions for a string to be added to it explaining what is happening at each step
        var step = "Initial Rows:" + "\r\n" + row1 + "\r\n" + row2 + "\r\n" + row3 + "\r\n";

        var arithRows = rowArithmetic(row1, row2, row3, i, step);
        row1 = arithRows[0];
        row2 = arithRows[1];
        row3 = arithRows[2];
        i = arithRows[3];
        step = arithRows[4];
        console.log("row1: " + row1);
        console.log("row2: " + row2);
        console.log("row3: " + row3);
        console.log("calling Row Arranger");
        /* After calling row arithmetic, row arranger looks to see if any of the rows could be arranged. this is necessary as if a row is done reducing, but is out of order, 
        it will not fully complete execution. */
        var arrangedRows = rowArranger(row1, row2, row3, i, step);
        row1 = arrangedRows[0];
        row2 = arrangedRows[1];
        row3 = arrangedRows[2];
        i = arrangedRows[3];
        step = arrangedRows[4];

        console.log("row1: " + row1);
        console.log("row2: " + row2);
        console.log("row3: " + row3);
        console.log("i: " + i);

        //this will perform arithmetic on the newly sorted rows
        console.log("calling Row Arithmetic again");
        var arithRows = rowArithmetic(row1, row2, row3, i, step);
        row1 = arithRows[0];
        row2 = arithRows[1];
        row3 = arithRows[2];
        i = arithRows[3];
        step = arithRows[4];

        console.log("calling row reducer")
        var reducedRows = rowReducer(row1, row2, row3, i, step);
        row1 = reducedRows[0];
        row2 = reducedRows[1];
        row3 = reducedRows[2];
        i = reducedRows[3];
        step = reducedRows[4];

        var arithRows = rowArithmetic(row1, row2, row3, i, step);
        row1 = arithRows[0];
        row2 = arithRows[1];
        row3 = arithRows[2];
        i = arithRows[3];
        step = arithRows[4];

        console.log("Final Row 1: " + row1);
        console.log("Final Row 2: " + row2);
        console.log("Final Row 3: " + row3);

        const newPhrase = step;
        const stripped = newPhrase.split(',').join(' '); //before outputting all of the steps undertaken, all commas need to be replaced with spaces
        var eloutput = document.getElementById("output");
        newOutput = stripped;
        eloutput.textContent = newOutput;

    }

});