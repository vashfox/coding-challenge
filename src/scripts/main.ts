const countryDropdown = document.getElementById('countryDropdown') as HTMLSelectElement;
const stateDropdown = document.getElementById('stateDropdown') as HTMLSelectElement;

const countries = [
  { code: 1, name: 'United States' },
  { code: 2, name: 'Canada' },
];

const statesByCountry = [
  { countryCode: 1, states: ['California', 'New York', 'Texas'] },
  { countryCode: 2, states: ['Ontario', 'Quebec', 'British Columbia'] },
];

export function onLoadCountries() {}

export function onLoadStateByCountry(countryId: number) {}

// Populate country dropdown
countries.forEach((country) => {
  const option = document.createElement('option');
  option.value = country.code.toString();
  option.textContent = country.name;
  countryDropdown.appendChild(option);
});

// Update state dropdown based on selected country
countryDropdown.addEventListener('change', () => {
  const selectedCountryCode = parseInt(countryDropdown.value);
  const states: string[] =
    statesByCountry.find((myObj) => myObj.countryCode === selectedCountryCode)?.states || [];

  stateDropdown.innerHTML = ''; // Clear existing options

  states.forEach((state) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  });
});
