"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main"); // Replace with actual module paths
describe('Dropdown Tests', function () {
    it('should load countries correctly', function () {
        var countries = (0, main_1.onLoadCountries)();
        expect(countries).toHaveLength(2); // Replace with actual country count
        expect(countries).toContainEqual({ code: 1, name: 'United States' });
        expect(countries).toContainEqual({ code: 2, name: 'Canada' });
    });
    it('should load states for a given country', function () {
        var statesUS = (0, main_1.onLoadStateByCountry)(1); // Replace with actual country code
        expect(statesUS).toHaveLength(3); // Replace with actual state count
        expect(statesUS).toContain('California');
        expect(statesUS).toContain('New York');
        expect(statesUS).toContain('Texas');
    });
    // Add more test cases as needed
});
