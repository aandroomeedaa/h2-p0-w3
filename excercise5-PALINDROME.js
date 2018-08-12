
function palindrome(kata)
{
var status = true
var tampung=''

    for(var i = kata.length -1; i>=0 ; i--)
    {
      tampung= tampung + kata[i]
    }
        if (tampung === kata)
        {
          status = true
        }
        else
        {
          status = false  
        }  
 return (status)
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
