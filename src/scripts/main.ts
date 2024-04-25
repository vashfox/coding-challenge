import { Country } from './../types/country';
import { States } from './../types/state';

const baseUrl = 'https://fedt.unruffledneumann.xyz/api/v1';
const myHeaders = new Headers();
myHeaders.append('x-api-key', 'rLn*xzeZ%U+(PRuK%:v@C(a3j=<.[TWX(F^,EDrv');

async function getCountries() {
  try {
    let res = await fetch(`${baseUrl}/countries`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => error.response);

    return JSON.parse(res);
  } catch (error) {
    console.log('Unexpected error:', error);
    return 'An unexpected error occurred';
  }
}

async function getStatesByCountryId(countryId: number) {
  try {
    let res = await fetch(`${baseUrl}/countries/${countryId}/states`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => error.response);

    return JSON.parse(res);
  } catch (error) {
    console.log('Unexpected error:', error);
    return 'An unexpected error occurred';
  }
}

const countrySelect: HTMLSelectElement = document.getElementById(
  'countryDropdown',
) as HTMLSelectElement;
const stateSelect: HTMLSelectElement = document.getElementById(
  'stateDropdown',
) as HTMLSelectElement;

// Initialization of countries & state data container.
let countryOptions: Country[] = [];
let stateOptions: States[] = [];

/**
 * To clear states options upon trigger and set values to null
 * @param el type HTMLSelectElement
 */
let onResetStateOptions = (el: HTMLSelectElement) => {
  el.selectedIndex = null;
  var i,
    L = el.options.length - 1;
  for (i = L; i >= 0; i--) {
    el.remove(i);
  }
};

/**
 * To Generate a hidden option / placeholder as default hidden values.
 * @param el type HTMLSelectElement
 */
let hiddenOption = (el: HTMLSelectElement) => {
  const option = document.createElement('option');
  option.textContent = `Select an option...`;
  option.selected = true;
  option.disabled = true;
  el.appendChild(option);
};

/**
 * To create and populate options supplied to the stateOptions.
 * @param el type HTMLSelectElement
 */
let onCreateStateOptions = (el: HTMLSelectElement) => {
  onResetStateOptions(el);
  hiddenOption(el);
  stateOptions.forEach((optionData) => {
    const option = document.createElement('option');
    option.value = optionData.id.toString();
    option.textContent = optionData.value;
    el.appendChild(option);
  });
};

// To set a placeholder disabled option on country/state select input as default upon page load.
hiddenOption(stateSelect);
hiddenOption(countrySelect);

// EVENT LISTENERS
countrySelect.addEventListener('change', (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  console.log(`Selected value: ${selectedValue}`);

  //Call api to load state of specified country id.
  onLoadCountryStates(parseInt(selectedValue));
});

stateSelect.addEventListener('change', (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  console.log(`Selected value: ${selectedValue}`);
});

// API Request Load countries initially
export async function onLoad() {
  // Populate country variable with data from response
  const res = await getCountries();
  countryOptions = (Array.isArray(res) && res) || [];

  // Populate country select el with options loaded from api.
  countryOptions.forEach((optionData) => {
    const option = document.createElement('option');
    option.value = optionData.id.toString();
    option.textContent = optionData.value;
    countrySelect.appendChild(option);
  });
}

// On load selected country states via countryId
export async function onLoadCountryStates(countryId: number) {
  // Populate states variable with data from response
  const res = await getStatesByCountryId(countryId);
  stateOptions = (Array.isArray(res) && res) || [];

  // Load on create options for the states.
  onCreateStateOptions(stateSelect);
}

onLoad();
