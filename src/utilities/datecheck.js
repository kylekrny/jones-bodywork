export const dateCheck = (date) => {
    const today = new Date();
    const moveDate = new Date(date);

    if (today.setHours(0, 0, 0, 0) >= moveDate.setHours(0, 0, 0, 0))
        return true
    else
        return false
};



