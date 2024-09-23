// Select the necessary DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchHistoryContainer = document.getElementById('search-history');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Initialize search history array from local storage or set it as an empty array
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Function to update and display search history
function updateSearchHistory() {
    searchHistoryContainer.innerHTML = ''; // Clear current list

    // Iterate through search history and create list items
    searchHistory.forEach((search, index) => {
        const li = document.createElement('li');
        li.textContent = search;
        searchHistoryContainer.appendChild(li);
    });
}

// Function to handle the search action
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        // Add new search term to history
        searchHistory.push(searchTerm);

        // Store updated history in local storage
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        // Update search history display
        updateSearchHistory();

        // Clear the search input field
        searchInput.value = '';
    }
});

// Function to clear the search history
clearHistoryBtn.addEventListener('click', () => {
    // Clear history from array and local storage
    searchHistory = [];
    localStorage.removeItem('searchHistory');

    // Update search history display
    updateSearchHistory();
});

// On page load, display search history from local storage
updateSearchHistory();
