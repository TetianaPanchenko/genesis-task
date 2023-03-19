const minutesToHours = (min) => {
    return `0${(min / 60) ^ 0}`.slice(-2) + ':' + ('0' + (min % 60)).slice(-2);
};

export { minutesToHours };
