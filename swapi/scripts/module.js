export async function fulfillRequest (spanUrl, inputUrl) {
    const response = await fetch(`${spanUrl}${inputUrl}`, {
        method: 'GET'
    });
    if (!response.ok) console.error('Something has happened');
    try {
       return {
           status: 'success',
           data: await response.json()
       }
   } catch (error) {
       console.error(error);
       return {
           status: 'error',
           data: null
       }
   }
}