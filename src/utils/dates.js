const monthArray = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]


export const convertDateToText = (dateObject) => {
    
    const newDateObject = new Date(dateObject);
    const year = newDateObject.getFullYear();
    const month = newDateObject.getMonth();
    const date = newDateObject.getDate();
    const convertedDate = `${monthArray[month]} ${date}, ${year}`;
    return convertedDate;
}