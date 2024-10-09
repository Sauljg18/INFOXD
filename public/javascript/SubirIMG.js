document.getElementById('imageUpload').addEventListener('change', function(event) {
    let imagePreview = document.getElementById('imagePreview');
    let file = event.target.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.innerHTML = '<img src="' + e.target.result + '" alt="Imagen">';
        }

        reader.readAsDataURL(file);
    }
});
