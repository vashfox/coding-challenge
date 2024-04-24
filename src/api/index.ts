import axios from 'axios';

const externalApi = axios.create({
    baseURL: 'https://fedt.unruffledneumann.xyz/api/v1', 
    timeout: 5000,
    headers: {
        'x-api-key': 'rLn*xzeZ%U+(PRuK%:v@C(a3j=<.TWX(F^,EDrv',
        'Accept' : '*',
        'Content-Type': 'application/json'
    },
});

async function getCountries() {
    try {
        const { data, status } = await externalApi.get(
            `/countries`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        } else {
            console.log('Unexpected error:', error);
            return 'An unexpected error occurred';
        }
    }
}

async function getStatesByCountryId(countryId: number) {
    try {
        const { data, status } = await externalApi.get(
            `/countries/${countryId}/states`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        } else {
            console.log('Unexpected error:', error);
            return 'An unexpected error occurred';
        }
    }
}

export const apiRequest = {
    getCountries,
    getStatesByCountryId
}