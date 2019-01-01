# Reduced_Row_Echelon_Matrix
A boring (but useful) web app, using mostly vanilla javascript, to convert a 3x3 matrix into reduced row echelon form.

Matrix Description:
-------------------
For those who haven't taken a linear algebra course, or who would like a refresher, a matrix is a simplified way to represent 
a system of linear equations. For example, lets say that we have three equations for a plane:

1x + 2y + 3z = 0

3x + 6y + 4z = 3

5x + 7y + 8z = 12

This is solveable the way that it is, but it is much simpler to find a solution set of the above equations. an augmented 
matrix is one way to do this, and this is what it would look like for this set:

1   2   3 |   0

3   6   4 |   3

5   7   8 |   12

the 3 columns on the left represent the coefficient matrix, and the column to the right of the bar is the resulting vector.

Reduced Row Echelon Form Description:
-------------------------------------
It is easiest to solve the above matrix if it is in reduced row echelon form. What this means is that we will try to cancel
two out of the three variables (equate two variables to zero, if possible) in each row, and the resulting reduced row echelon
form matrix will ideally look like the following:

1   0   0 |   ?

0   1   0 |   ?

0   0   1 |   ?

where the ? marks represent some number. For the sake of explaination, lets give the ? marks some values so that we can see how a RREF matrix can help us:

1   0   0 |   7

0   1   0 |   3

0   0   1 |   2


the solution set of this example matrix would be:

|x|   =   |7|

|y|   =   |3| 

|z|   =   |2|

or, x = 7, y = 3, z = 2

If we plug these variables into each line of the original equation, we will get the values on the right hand side of the augmented matrix. 


Allowed Operations:
-------------------

The only allowed operations to convert a matrix into reduced row echelon form are:

1. Multiplying a row by a constant

2. adding an entire row to another row

3. exchanging row positions in the matrix

No other operations are allowed.
