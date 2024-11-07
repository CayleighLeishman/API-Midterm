
// API Token: eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4NzQ2OTA3LCJleHAiOjE3MzA4NjY4NTJ9.LFnzJkxnK1ZihK5-LHxXQdJUY_C-LseROz-3vhFxRUh3CryN8hAPAXVdq_SZpwT6ARK-OQ-euHnlm5ovRSP6hA
 // I found API token with this website: https://www.inaturalist.org/users/api_token, I had to create an account to do so though

//utilizes the Search function, whena  search is entered it will 
// async function searchThis(){
//     const search = document.getElementById('searchBar').value;

//     if (search.length > 1) {
//         try{
//             const response = await fetch('eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4NzQ2OTA3LCJleHAiOjE3MzA4NjY4NTJ9.LFnzJkxnK1ZihK5-LHxXQdJUY_C-LseROz-3vhFxRUh3CryN8hAPAXVdq_SZpwT6ARK-OQ-euHnlm5ovRSP6hA') 
//             
//             if (!response.ok) throw new Error('Something went wrong.');

//             const nature= await response.json();
//             displayResults(nature)
//         } 
//         catch {
//             console.error('Error:',error);
//         }
        
//     }
// }


fetch('https://www.inaturalist.org/users/eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4NzQ2OTA3LCJleHAiOjE3MzA4NjY4NTJ9.LFnzJkxnK1ZihK5-LHxXQdJUY_C-LseROz-3vhFxRUh3CryN8hAPAXVdq_SZpwT6ARK-OQ-euHnlm5ovRSP6hA',{
    method:'GET'}) 
.then(response => response.json())
.then(data=>{
    console.log(data);
})
.catch(error=> console.error('Error:',error))


// this is supposed to say "Let the search button work"
function search() {
    const query = document.getElementById('searchGo').value;
    const result= document.getElementById('result').value;
    console.log('You searched for', query, 'It works!')
    result.textContent = "It works!";
}