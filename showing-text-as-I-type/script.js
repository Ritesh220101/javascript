
window.onload = function() {
    var src = document.getElementById("one"),
        dst = document.getElementById("two");
    src.addEventListener('input', function() {
        dst.value = src.value.replace(/[^A-Za-z]+/g, '');
    });
};

// the [] represents a character (or a number of different possible characters)
// the ^ means all characters EXCEPT the ones defined in the brackets
// A-Z equals capital letters
// a-z equals lowercase letters