

let art;
let showArtInfo;

async function clickedEvent(art_index, info_index) {
    let elem = document.getElementsByTagName('img')[art_index]
    let id = elem.attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}? 
    fields=id,title,artist_display,date_display,main_reference_number`, {
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)

    if (showArtInfo) {
        stopShow();
        } else {
            let title = response.data.title;
            let artist = response.data['artist_display']
            let date = response.data['date_display']
            let div = document.createElement("div");
            div.innerHTML = `Title: ${title}<br>Artist: ${artist}<br>Date Display: ${date}`;
            elem.parentElement.appendChild(div);
        }
}

function getArt(id, event) {

    switch (id) {
        case 'image1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
    }
    switch (id) {
        case 'image2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
    }
    switch (id) {
        case 'image3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
    }
    switch (id) {
        case 'image4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
    }
    switch (id) {
        case 'image5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
    }
    switch (id) {
        case 'image6': {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
    switch (id) {
        case 'image7': {
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
    }
    switch (id) {
        case 'image8': {
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
    switch (id) {
        case 'image9': {
            event.stopPropagation();
            clickedEvent(8,0)
            break;
        }
    }
}