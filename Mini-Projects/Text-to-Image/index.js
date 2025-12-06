const extractText = () => {
    const fileInput = document.getElementById('image');
    const outputDiv = document.getElementById('output');

    const imageFile = fileInput.files[0];

    if (!imageFile) {
        outputDiv.textContent = "Please select an image file ";
        return;
    }

    // Tesseract -> it is package of js from where  are extracting image into text.
    //    Tesseract.recognize( -> .recognize it a package to regognize the image anf convert it to in which lang you want 
    //         imageFile,
    //         'eng'
    //     )


    Tesseract.recognize(
        imageFile,
        'eng'
    ).then(({ data }) => {
        outputDiv.textContent = data.text;
    }).catch((err) => {
        console.log(err);
    })
}