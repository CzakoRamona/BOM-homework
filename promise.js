var employeePromise = new Promise(function (resolve, reject) {
    fetch('https://rest.atroot.cf/employees').then(
        function (response) {
            if (response) {
                resolve(response.json());
            } else {
                reject(Error('Error'))
            }
        })
});

employeePromise
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error)
    });