const dayjs = require('dayjs');


function dateDifference(date1, date2, unit = 'days') {
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);
    
    return d2.diff(d1, unit);
}


function getDetailedDifference(date1, date2) {
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);

    const years = d2.diff(d1, 'year');
    const months = d2.diff(d1, 'month') % 12;
    const days = d2.diff(d1, 'day') % 30;
    const hours = d2.diff(d1, 'hour') % 24;
    const minutes = d2.diff(d1, 'minute') % 60;
    const seconds = d2.diff(d1, 'second') % 60;

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

module.exports = { dateDifference, getDetailedDifference };
