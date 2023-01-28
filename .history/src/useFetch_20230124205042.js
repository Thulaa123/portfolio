import axios from 'axios';

const getRecords = async () => {
    try {
        // Set the base URL for the PocketBase API
        const baseURL = 'https://thulana-port.fly.dev';

        // Set the endpoint for getting records
        const endpoint = '/records';

        // Set the username and password for authentication
        const username = 'your_username';
        const password = 'your_password';

        // Use axios to make a GET request to the endpoint
        const response = await axios.get(baseURL + endpoint, {
            auth: {
                username: username,
                password: password
            }
        });

        // Get the data from the response
        const records = response.data;

        // Do something with the records in your React app
        console.log(records);

    } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
    }
}

