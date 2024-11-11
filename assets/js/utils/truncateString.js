const truncate = (str, n) => {
    return str && str.length > n ? str.slice(0, n - 1).trim() + '…' : str;
};

export default truncate;
