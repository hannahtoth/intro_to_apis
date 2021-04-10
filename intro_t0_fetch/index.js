// console.log("Hello World")
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
fetch(url)  // The fetch method is available to us in the browser
            // And we supply at least a url and it will kick off 
            // a "GET" request to that url
    .then(res => res.json()) // .then() can be chained on a fetch to allow us
                             // to take the response and do something with it
    .then(json => { // In this case I have used the json data to display in the console
        console.log(json)
        console.log(json.title)  // These logs are unique to the json that we got back
        console.log(json.locations)// and only work on this objects structure
        console.log(json.director)
    })
/*
BASIC fetch usage
fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)
*/
const baseURL = "https://ghibliapi.herokuapp.com"

fetch(baseURL + "/films")
    .then(res => res.json())
    .then(json => {
        
        let myArr = json.map(film => {
            return {
                title: film.title,
                rt_score: Number(film.rt_score)
            }})
       
            //sort them by rating
            let sortedArr = myArr.sort((cur, prev) => prev.rt_score - cur.rt_score)
            //passes off the Sorted Array to be displayed
            displayResults(sortedArr)
        
        })
        // Try to use the json [] to create a new array of "film" obj that only have
        // a title and the rt_rating
        /*
        [
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83}
        ] 
        */
       let myArr = json.map(film => (
        {
            title: film.title,
            rt_score: +film.rt_score
        } ))
       //console.log(myArr)
       displayResults(myArr)
    

    //Display Results
    function displayResults(films){
        //grabs the ul element from the index.html
        let filmList = document.getElementById("film-list")
        // Goes through the films that are passed in to the function
        films.map(fil => {
            //for each film I make a new li tag
        let filmLi = document.createElement('li')
        // Assignment of the film title and rt_score to the inner text
        filmLi.innerText = `${film.title} ${film.rt_score}`
        // Adds the nely made li tag wutg text to the ul tag
        filmList.appendChild(filmLi)
    })
}

    // json.push({title: "Justin's movie", rt_score: "not a number hahaha"})
    // let myArr = json.map(film => {
    //         return {
    //             title: film.title,
    //             rt_score: Number(film.rt_score)}
    //     }).sort((cur, prev) => prev.rt_score - cur.rt_score)
// We will come back to this
/*
let getLocations = (locUrl) => {
    fetch(locUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json[0])
        })
}
*/


