const formatDate = (value: Date) => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November','December'
    ];

    const date = new Date(value);
    // get the month name
    const monthName = months[date.getMonth()];
    // get the day of the month
    const dayOfMonth = date.getDate();
    return {
        month: monthName,
        day: dayOfMonth
    }
}

export default formatDate;