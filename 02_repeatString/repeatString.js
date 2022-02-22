const repeatString = function(str,num) {
    if (num < 0 ) {
        return "ERROR"        
    } else {
        
        const list = [];
        for (let i = 0; i < num; i++) {
          list.push(str)   
        }
        return list.join("")
    }
    
};

// Do not edit below this line
module.exports = repeatString;
