document.getElementById("file-input").addEventListener("input", function () {
    reader = new FileReader();
    reader.readAsDataURL(document.querySelector("input[type=file]").files[0]);
    reader.addEventListener("load", function () {
        orriimg = document.createElement("img");
        orriimg.id = "orriimg";
        document.body.appendChild(orriimg);
        document.getElementById("orriimg").src = reader.result;
        document.getElementById("orriimg").addEventListener("load", function () {
            Tesseract.recognize(document.getElementById("orriimg")).then(function (result) {
                console.log(result.text);
            });
        });
    });
});