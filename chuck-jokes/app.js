(function() {

    document.querySelector('.btn').addEventListener('click', function(e) {
        const number = document.querySelector('input[type="number"]').value;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

        
        xhr.onload = function() {
            if(this.status === 200) {
                const response = JSON.parse(this.responseText);
                
                let output = '';
                if(response.type === 'success') {
                    response.value.forEach(function(joke) {
                        output += `
                        <li class="list-group-item font-weight-bold">${joke.joke}</li>
                        `; 
                    });
                }
                document.querySelector('#jokes').innerHTML = output;
            }
        }

        xhr.send();

        e.preventDefault();
    });

})();