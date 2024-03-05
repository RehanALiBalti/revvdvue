const uploadBtn = document.getElementById('uploadBtn');
const uploadPhotos = document.getElementById('uploadPhotos');
const fileListContainer = document.getElementById('fileList');

uploadBtn.addEventListener('click', function () {
    // Trigger the file input element
    uploadPhotos.click();
});

uploadPhotos.addEventListener('change', function () {
    // Get the selected files
    const files = uploadPhotos.files;

    // Clear the previous file list
    fileListContainer.innerHTML = '';

    // Iterate through the selected files and display their names with a delete button
    for (let i = 0; i < files.length; i++) {
        const fileName = files[i].name;
        const listItem = document.createElement('div');
        listItem.className = 'file-list-item';
        
        // Display the file name
        listItem.textContent = fileName;

        // Create a delete button (cross icon)
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '&#10006'; // Cross icon (X)

        // Add an event listener to delete the file when the button is clicked
        deleteButton.addEventListener('click', function() {
            fileListContainer.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        fileListContainer.appendChild(listItem);
    }
});
