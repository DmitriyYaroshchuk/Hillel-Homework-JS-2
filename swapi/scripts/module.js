export async function fulfillRequest (spanUrl, inputUrl) {
    const response = await fetch(`${spanUrl}/${inputUrl}`, {
        method: 'GET'
    });
    try {
       return {
           status: 'success',
           data: await response.json()
       }
   } catch (error) {
       console.error('It failed to get a response from the server, check the data', error);
       return {
           status: 'error',
           data: null
       }
   }
}