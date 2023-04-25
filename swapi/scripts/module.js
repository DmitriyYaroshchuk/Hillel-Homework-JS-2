export async function fulfillRequest (spanUrl, inputUrl) {
    const response = await fetch(`${spanUrl}/${inputUrl}`, {
        method: 'GET'
    });
   try {
       return {
           status: 'success',
           data: await response.json()
       }
   } catch {
       return {
           status: 'error',
           data: null
       }
   }
}