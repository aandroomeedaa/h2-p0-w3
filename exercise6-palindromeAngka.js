function angkaPalindrome(num) {
    var z = num+1;
    var x = z.toString(); // num in string
    var y = ''; // for reversed num
    var i = x.length-1; 
    
    palindromeCheck(x);
      // looping to get the character/number in index
      function palindromeCheck(palindrome) {
          for (i; i>=0; i--) {
            y = y + x[i];
            //console.log(i+' '+y +' '+x)
          }
      }    
    // verificace to match between num and the reverse of num
    if (x === y) {
      return(x);
    } else {
      num = num + 1;
      return angkaPalindrome(num);
    }    
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
