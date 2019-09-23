const leapyear = function(year1) {
    if (year1 % 4 === 0) {
        return true;
    }
    if (year1 % 400 === 0) {
        return true;
    }
    if(year1 % 100 === 0){
        return false;
    }
        return false;
    }

module.exports = leapyear;