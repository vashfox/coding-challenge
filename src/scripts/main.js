"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onLoadStateByCountry = exports.onLoadCountries = void 0;
var countryDropdown = document.getElementById('countryDropdown');
var stateDropdown = document.getElementById('stateDropdown');
var countries = [
    { code: 1, name: 'United States' },
    { code: 2, name: 'Canada' },
];
var statesByCountry = [
    { countryCode: 1, states: ['California', 'New York', 'Texas'] },
    { countryCode: 2, states: ['Ontario', 'Quebec', 'British Columbia'] },
];
function onLoadCountries() { }
exports.onLoadCountries = onLoadCountries;
function onLoadStateByCountry(countryId) { }
exports.onLoadStateByCountry = onLoadStateByCountry;
// Populate country dropdown
countries.forEach(function (country) {
    var option = document.createElement('option');
    option.value = country.code.toString();
    option.textContent = country.name;
    countryDropdown.appendChild(option);
});
// Update state dropdown based on selected country
countryDropdown.addEventListener('change', function () {
    var _a;
    var selectedCountryCode = parseInt(countryDropdown.value);
    var states = ((_a = statesByCountry.find(function (myObj) { return myObj.countryCode === selectedCountryCode; })) === null || _a === void 0 ? void 0 : _a.states) || [];
    stateDropdown.innerHTML = ''; // Clear existing options
    states.forEach(function (state) {
        var option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    });
});
