
var teste = [
    `http://localhost:9090/administrator/v2/academic/all`,
    `http://localhost:9090/administrator/v2/academic/search/?=3`,
    `http://localhost:9090/administrator/v2/academic/record`,
]

function FormData() {
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('user', user)
}

function submit(event = '') {
    event.preventDefault()
    
    axios.get(url, formData)
    .then(function(response) {
        alert('teste: ' + response.data.user_url)
        console.log('teste: ', response.data)
    })
    .catch(function(error) {alert(error)})
}

const 
    baseUrl = 'https://api.github.com/', 
    route = '', //'administrator/v2/academic/search', 
    params = {
        // "client_id": "houseflix_client",
        // "client_secret": "92427ae41e4649b934e3b0c44298fc1c149afbf4c8996fbca495991b7852b855",
        // "grant_type": "xpassword",
        // "username": "amaro",
        // "password": "1234"
    } 
;

const config = { 
    headers: { 
        // 'Accept': '*', 
        // 'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${'access_token'}` 
    }   
}

Axios(baseUrl, route, params, config)

async function Axios(baseUrl, route = '', params = {}, config = {}) {
    
    try {
        if (typeof(params) === 'object' ) { console.log('object') } else 
        if (typeof(params) === 'string') { console.log('string') }

        let res = await  axios.get(baseUrl, route, params, config)
        console.log('teste1: ', res.data)
    } 
    catch (error) { console.log(error) }
}

function teste(params = 'teste') { return console.log(params) }