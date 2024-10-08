const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const addbutton = document.getElementById('add-button');
const ul = document.getElementById('Songlist');

addbutton.addEventListener('click', () => {
    const newTitle = title.value;
    const newArtist = artist.value;

    // Check if inputs are not empty
    if (newTitle === '' || newArtist === '') {
        alert('Please enter both title and artist.');
        return;
    }

    // Create elements
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const small = document.createElement('small');
    const deleteButton = document.createElement('button');
    const hr = document.createElement('hr');

    // Set values to the elements
    p.innerHTML = newTitle;
    small.innerHTML = newArtist;
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm'; 

    // Append elements
    div.classList.add('d-flex', 'justify-content-between', 'align-items-start'); 
    div.append(p); // Title
    div.append(deleteButton); // Delete button
    li.append(div);
    
    // Create a separate div for artist
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('text'); 
    artistDiv.append(small); 
    li.append(artistDiv); 

    ul.append(li);
    ul.append(hr); 

    
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
        ul.removeChild(hr); 
    });

   
    title.value = '';
    artist.value = '';
});
