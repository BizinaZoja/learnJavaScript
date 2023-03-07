'use strict';

function checkSpam(str) {
    str.toLowerCase();
    if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

