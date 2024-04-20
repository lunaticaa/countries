const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

function groupCountriesByFirstLetter(countries) {
  const groupedCountries = {};
  countries.forEach(country => {
      const firstLetter = country.charAt(0).toLowerCase();
      if (!groupedCountries[firstLetter]) {
          groupedCountries[firstLetter] = [];
      }
      groupedCountries[firstLetter].push(country.toLowerCase());
  });
  return groupedCountries;
}

function searchCountriesByFirstTwoLetters() {
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value.toLowerCase();
  if (searchValue.length >= 2) {
      const firstTwoLetters = searchValue.substring(0, 2);
      const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(firstTwoLetters));
      const groupedFilteredCountries = groupCountriesByFirstLetter(filteredCountries);
      displayCountries(groupedFilteredCountries);
  } else {
      const container = document.getElementById('countries-container');
      container.innerHTML = 'Please enter at least two letters.';
  }
}

document.getElementById('search-button').addEventListener('click', searchCountriesByFirstTwoLetters)

function displayCountries(groupedCountries) {
  const container = document.getElementById('countries-container');
  Object.keys(groupedCountries).sort().forEach(letter => {
      const countries = groupedCountries[letter];
      const groupDiv = document.createElement('div');
      groupDiv.classList.add('country-group');
      const title = document.createElement('h2');
      title.textContent = `${letter} (${countries.length})`;
      const countryList = document.createElement('ul');
      countryList.classList.add('country-list');
      countries.sort().forEach(country => {
          const listItem = document.createElement('li');
          listItem.textContent = country;
          countryList.appendChild(listItem);
      });
      groupDiv.appendChild(title);
      groupDiv.appendChild(countryList);
      container.appendChild(groupDiv);
  });
}

const groupedCountries = groupCountriesByFirstLetter(countries);
displayCountries(groupedCountries);
