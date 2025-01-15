// Function to fetch and display the README file
function loadReadme(fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(data => {
            // Convert Markdown to HTML using marked.js
            const htmlContent = marked.parse(data);
            document.getElementById('readmeContent').innerHTML = htmlContent;
        })
        .catch(error => {
            document.getElementById('readmeContent').innerHTML = `<p>Error loading README: ${error.message}</p>`;
        });
}

// Event listener to detect file change
document.getElementById('readmeSelector').addEventListener('change', (event) => {
    const selectedFile = event.target.value;
    loadReadme(selectedFile);
});

// Initial load
loadReadme('readme1.md');
