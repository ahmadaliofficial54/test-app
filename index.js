console.log('test.....'); 

const url = new URL("https://calm-temple-71-staging.authkit.app/?client_id=client_01J19JF1WR1C8VQ0A45E2S45YY&redirect_uri=https%3A%2F%2Fn36vsijvni.execute-api.us-east-1.amazonaws.com%2Ftest%2Fprince%2Fcallback&response_type=code&authorization_session_id=01J4722NPDVXY3DKRJE89XMNA7")
url.searchParams.set('email', "ahmed.aliadp@gmail.com");
 
console.log(url.toString())