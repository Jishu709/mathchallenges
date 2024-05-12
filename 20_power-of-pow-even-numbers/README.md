## Power of power of Even Numbers:

**Goal**: Return the sum of the squares of n even numbers
_Example_ : input n = 3;
the first 3 even numbers are 2,4,6
so 2 raised to 2 + 4 raised to 2 + 6 raised to 2
=> 4+16+36 = 56.

# Process:

Take count = 2 which is the first even number.

sum = 0
count = 2
while(n>0){

1. sum = sum + count**2 // 0 + 2**2 = 4
2. count = count+2
3. n--
   }

_Example_:
consider n=4;
initially count =2, sum =0;
after 1st iteration => sum = sum + count**2 = 0 + 2**2 = 4;
after 2nd iteration => sum = 4 + 4**2 = 4+16 = 20;
after 3rd iteration => sum = 20 + 6**2 = 56;
after 4th iteration => sum = 56 + 8**2 = 120
then the program exits as n is becomes less than 1;
