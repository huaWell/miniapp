let formatDate = (date) => {
    let now = new Date(date);
    let year = (now.getYear() < 1900) ? (1900 + now.getYear()) : now.getYear();
    let month= now.getMonth() + 1; var date= now.getDate(); 
    let hour= now.getHours(); 
    let minute= now.getMinutes();
    let second= now.getSeconds(); 
    let result = {"time": year + "-" + month, "showTime": year + "年" + month + "月"}
    return result;
}

export default formatDate