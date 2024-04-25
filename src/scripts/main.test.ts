import { onLoad } from './main';

jest.mock('./path-to-getCountries', () => ({
  getCountries: jest.fn(() =>
    Promise.resolve([
      { id: 1, value: 'Country A' },
      { id: 2, value: 'Country B' },
    ]),
  ),
}));

describe('onLoad function', () => {
  beforeEach(() => {
    // Create a mock countrySelect element
    const countrySelect = document.createElement('select');
    countrySelect.id = 'countrySelect';
    document.body.appendChild(countrySelect);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.removeChild(document.getElementById('countrySelect'));
  });

  it('should populate countrySelect with options', async () => {
    await onLoad();

    // Verify that countrySelect has correct options
    const options = document.querySelectorAll('#countrySelect option');
    const value = (options[0] as HTMLOptionElement).getAttribute('value'); 
    const textContent = (options[0] as HTMLOptionElement).getAttribute('textContent'); 

    expect(options.length).toBe(2);
    expect(value).toBe('1');
    expect(textContent).toBe('Country A');
  });
});
