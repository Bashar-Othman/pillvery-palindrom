
   let start = 0;
   let maxLength = 1;
   let counter = 0;


function longistPal(str) {


   
    let n = str.length;

    let arrayOfAllPAlin = Array(n).fill().map(() => Array(n).fill(false));

 
    for (let index = 0; index < n - 1; ++index) {

        if (str.charAt(index) == str.charAt(index + 1)) {
            maxLength = 2;

            start = index;
            arrayOfAllPAlin[index][index + 1] = true;

        }
    }

    for (let crawler = 3; crawler <= n; ++crawler) {

        for (let index = 0; index < n - crawler + 1; ++index) {

            let j = index + crawler - 1;

            if (arrayOfAllPAlin[index + 1][j - 1] && str.charAt(index) == str.charAt(j)) {

                arrayOfAllPAlin[index][j] = true;

                if (crawler > maxLength) {
                    start = index;
                    maxLength = crawler;
                }
            }
        }
    }

    return maxLength;
}



let str3 = "basharrahsabjjj"
let str = "gogfiooif"


console.log(longistPal(str3));
console.log(longistPal(str));

