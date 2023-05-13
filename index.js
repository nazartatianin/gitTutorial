fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (const user of users) {
            let userDiv = document.createElement('div');

            let title = document.createElement('h2');
            title.innerText = `${user.name}`;
            userDiv.append(title);

            let info = document.createElement('p');
            info.innerText = `${user.email}  
                               ${user.address.street}, ${user.address.suite}, ${user.address.city}
                               ${user.phone}
                               ${user.website}
                               ${user.company.name}`;
            userDiv.append(info);



            let target = document.getElementById('target');
            target.append(userDiv);
        }

    });
