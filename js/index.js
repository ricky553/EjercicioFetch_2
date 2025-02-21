fetch("https://api.escuelajs.co/api/v1/categories")
.then(Response => Response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md3 g-4">'

    for (let user of data){
        card += ` <div id="cardList">
        <div class="row row-cols-1 row-cols-md3 g-4">
            <div class="col">
                <div class="card">
                    <img src="${user.image}" class="cars-img-top" alt="Usuario">
                    <div class="card-body">
                        <h5 class="card title">${user.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    card += '</div>'

    document.getElementById("cardList").innerHTML = card

})
   
