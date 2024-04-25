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
    // Call onLoad function
    await onLoad();

    // Verify that countrySelect has correct options
    const options = document.querySelectorAll('#countrySelect option');
    expect(options.length).toBe(2);
    expect(options[0].value).toBe('1');
    expect(options[0].textContent).toBe('Country A');
    expect(options[1].value).toBe('2');
    expect(options[1].textContent).toBe('Country B');
  });
});