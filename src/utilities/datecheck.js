export const dateCheck = () => {
    const today = new Date();
    const moveDate = new Date('2024-08-15');

    if (today.setHours(0, 0, 0, 0) >= moveDate.setHours(0, 0, 0, 0))
        return true
    else
        return false
};