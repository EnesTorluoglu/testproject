const fetchUsersData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return await response.json();
    }catch(err){
        console.error(err)
    }
}

module.exports = fetchUsersData;
