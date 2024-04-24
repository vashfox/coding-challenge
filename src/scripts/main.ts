import { apiRequest } from './../api';

type Country = { id: number; value: string };
type States = { id: number; value: string };

const countrySelect: HTMLSelectElement = document.getElementById(
  'countryDropdown',
) as HTMLSelectElement;
const stateSelect: HTMLSelectElement = document.getElementById(
  'stateDropdown',
) as HTMLSelectElement;

const countryOptions: Country[] = [
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

const stateOptions: States[] = [
  {
    id: 238,
    value: 'Australian Capital Territory',
  },
  {
    id: 239,
    value: 'New South Wales',
  },
  {
    id: 240,
    value: 'Northern Territory',
  },
];

let onResetStateOptions = (el: HTMLSelectElement) => {
  el.selectedIndex = null;
  var i,
    L = el.options.length - 1;
  for (i = L; i >= 0; i--) {
    el.remove(i);
  }
};

let hiddenOption = (el: HTMLSelectElement) => {
  const option = document.createElement('option');
  option.textContent = `Select an option...`;
  option.selected = true;
  option.disabled = true;
  el.appendChild(option);
};

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

countryOptions.forEach((optionData) => {
  const option = document.createElement('option');
  option.value = optionData.id.toString();
  option.textContent = optionData.value;
  countrySelect.appendChild(option);
});

countrySelect.addEventListener('change', (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  console.log(`Selected value: ${selectedValue}`);

  onCreateStateOptions(stateSelect);
});

stateSelect.addEventListener('change', (event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  console.log(`Selected value: ${selectedValue}`);
});

// API Request Load countries initially

// function onIniLoad() {
//   const res = apiRequest.getCountries();
//   console.log(res);
// }

// onIniLoad();
