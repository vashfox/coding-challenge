var countrySelect = document.getElementById('countryDropdown');
var stateSelect = document.getElementById('stateDropdown');
var countryOptions = [
    {
        id: 13,
        value: 'Australia',
    },
    {
        id: 86,
        value: 'Germany',
    },
    {
        id: 165,
        value: 'New Zealand',
    },
];
var stateOptions = ['Option 1 state', 'Option 2 state', 'Option 3 state'];
var onResetStateOptions = function (el) {
    el.selectedIndex = null;
    var i, L = el.options.length - 1;
    for (i = L; i >= 0; i--) {
        el.remove(i);
    }
};
var hiddenOption = function (el) {
    var option = document.createElement('option');
    option.textContent = "Select an option...";
    option.selected = true;
    option.disabled = true;
    el.appendChild(option);
};
var onCreateStateOptions = function (el) {
    onResetStateOptions(el);
    hiddenOption(el);
    stateOptions.forEach(function (optionText) {
        var option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        el.appendChild(option);
    });
};
// To set a placeholder disabled option on country/state select input as default upon page load.
hiddenOption(stateSelect);
hiddenOption(countrySelect);
countryOptions.forEach(function (optionData) {
    var option = document.createElement('option');
    option.value = optionData.id.toString();
    option.textContent = optionData.value;
    countrySelect.appendChild(option);
});
countrySelect.addEventListener('change', function (event) {
    var selectedValue = event.target.value;
    console.log("Selected value: ".concat(selectedValue));
    onCreateStateOptions(stateSelect);
});
stateSelect.addEventListener('change', function (event) {
    var selectedValue = event.target.value;
    if (!selectedValue)
        console.log("Selected value: ".concat(selectedValue));
});
export {};
// const countryDropdown: HTMLSelectElement = document.getElementById(
//   'countryDropdown',
// ) as HTMLSelectElement;
// const stateDropdown: HTMLSelectElement = document.getElementById(
//   'stateDropdown',
// ) as HTMLSelectElement;
// console.log(document.getElementById('stateDropdown'), stateDropdown);
// // Get the select element by its ID
// // Add an event listener to handle changes in the select
// countryDropdown.addEventListener('change', (event) => {
//   const value = (event.target as HTMLSelectElement).value;
//   console.log(`Selected country: ${value}`);
// });
// stateDropdown.addEventListener('change', (event) => {
//   const value = (event.target as HTMLSelectElement).value;
//   console.log(`Selected state: ${value}`);
// });
// // const countries = [
// //   { code: 1, name: 'United States' },
// //   { code: 2, name: 'Canada' },
// // ];
// // const statesByCountry = [
// //   { countryCode: 1, states: ['California', 'New York', 'Texas'] },
// //   { countryCode: 2, states: ['Ontario', 'Quebec', 'British Columbia'] },
// // ];
// export default onLoadCountries() {}
// export default onLoadStateByCountry(countryId: number) {}
// // Populate country dropdown
// countries.forEach((country) => {
//   const option = document.createElement('option');
//   option.value = country.code.toString();
//   option.textContent = country.name;
//   countryDropdown.appendChild(option);
// });
// // Update state dropdown based on selected country
// countryDropdown.addEventListener('change', () => {
//   const selectedCountryCode = parseInt(countryDropdown.value);
//   const states: string[] =
//     statesByCountry.find((myObj) => myObj.countryCode === selectedCountryCode)?.states || [];
//   stateDropdown.innerHTML = ''; // Clear existing options
//   states.forEach((state) => {
//     const option = document.createElement('option');
//     option.value = state;
//     option.textContent = state;
//     stateDropdown.appendChild(option);
//   });
// });
// function onIniLoad() {
//   const res = apiRequest.getCountries();
//   console.log(res);
// }
// onIniLoad();
