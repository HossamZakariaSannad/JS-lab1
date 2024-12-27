
// for q1
// var images = ['i1.png', 'i2.png', 'i3.png', 'i4.png', 'i5.png'];
// var i = 0;
// var slide = document.getElementById('img1');
// slide.onmouseover = function () {
//    var interval = setInterval(function () {
//         i++;
//         slide.src = images[i];
//         if(i==images.length-1)
//             {
//                 i = 0
//             }
//     }, 350);
//     slide.onmouseleave = function () {
//         clearInterval(interval);
//         slide.src = images[0];
//     };

// };
// Fetch JSON data from local file

// for q2
fetch('people.json') 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var dropdown = document.getElementById('nameDropdown');
        var detailsDiv = document.getElementById('details');

        // Populate the dropdown with names
        data.forEach(function(person) {
            var option = document.createElement('option');
            option.value = person.name;
            option.textContent = person.name;
            dropdown.appendChild(option);
        });

        // Handle dropdown selection
        dropdown.addEventListener('change', function() {
            var selectedName = dropdown.value;
            var selectedPerson = data.find(function(person) {
                return person.name === selectedName;
            });

            if (selectedPerson) {
                // Display details
                detailsDiv.innerHTML = `
                    <p><strong>Name:</strong> ${selectedPerson.name}</p>
                    <p><strong>Age:</strong> ${selectedPerson.age}</p>
                    <p><strong>Email:</strong> ${selectedPerson.email}</p>
                `;
            } else {
                detailsDiv.innerHTML = `<p><strong>Details will appear here...</strong></p>`;
            }
        });
    });
