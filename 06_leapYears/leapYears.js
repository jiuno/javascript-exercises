// const leapYears = function(year) {
//     if (year%100 == 0) {
//         if (year%4 == 0 && year%400 == 0) {
//             return true;            
//         } else {
//             return false;
//         }
//     } else if (year%4 == 0) {
//         return true;        
//     } else {
//         return false;
//     }
// };


const leapYears = function (year) {
    switch (year%100 == 0) {
        case (true):
            if (year%4 == 0 && year%400 == 0 ) {
                return true;
            } else {
                return false;
            }
        case(false):
            if (year%4 == 0) {
        return true;      
        } else {
        return false;
        }
    }    
}

// Do not edit below this line
module.exports = leapYears;
