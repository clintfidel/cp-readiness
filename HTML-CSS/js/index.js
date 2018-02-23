function validate () {
    var input = document.getElementById('userInput').value
    if(input.trim() === '') {
        alert("please fill out the field");
        return false;
    }
    alert(input)
}
