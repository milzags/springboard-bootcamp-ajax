//https://hackorsnoozev3.docs.apiary.io/#introduction/authentication 

async function getUser(token) {
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {params: {token}});
    console.log(res);
}

async function signUp(username, password, name) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { username, password, name} });
    // console.log(res);
}

async function login(username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password} });
    // console.log(res);
    return res.data.token;
    // console.log(token);
}

// signUp('buttersChicken','asdfasdfasdf','butters the chicken');

async function getUsersWithAuth() {
    const token = await login('buttersChicken','asdfasdfasdf');
    getUser(token);
}

getUsersWithAuth();