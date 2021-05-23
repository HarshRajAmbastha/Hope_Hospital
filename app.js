//here i have tried to get data related after clicking the buttons using fetch api .Please note that it is a dummy api but in the similar way we can maintain the data related to Covid Resources.


    var myBtn = document.getElementsByClassName('myBtn');
    for (var i = 0; i < myBtn.length; i++) {
        myBtn[i].addEventListener('click', function () {
            url = "https://api.github.com/users";
            fetch(url).then((response) => {
                return response.json();
            }).then((data) => { 
                console.log(data);
            })
        });
    }

    













