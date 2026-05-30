console.log('initiating hide_youtube_shorts');

let shortsShelves = null;
let reelShelf = null;

function shortsremover() {
    console.log('removing the short form videos, if any');
    const intervalId = setInterval(function relay(){

        let url = window.location.href;

        if(url === 'https://www.youtube.com/') {

            shortsShelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');

            // Loop through each Shorts shelf and manipulate it (for example, logging them to the console)
            shortsShelves.forEach(shelf => {
                console.log('Shorts shelf found:', shelf);
                shelf.style.display = 'none'; 
            });
            if(shortsShelves) {
                console.log('clearing the array of shorts now');
                shortsShelves = null;
                clearInterval(intervalId);
            }
        }
        else {
            reelShelf = document.querySelectorAll('#contents ytd-reel-shelf-renderer[modern-typography]');

            reelShelf.forEach(shelf => {
                console.log('reel shelf found:', shelf);
                shelf.style.display = 'none';
            });
            if(reelShelf.length > 0) {
                console.log('clearing the array of reels now',reelShelf);
                reelShelf = null;
                clearInterval(intervalId);
            }
        }

        console.log('done');
    }, 500);  // interval of 0.5 seconds

    setTimeout(() => {
        clearInterval(intervalId);
    },5000); // turns out the intervals if no shorts content is found in 5 seconds
    
}

document.addEventListener('yt-navigate-finish', shortsremover);
// Choose a different event depending on when you want to apply the change

if (document.body) shortsremover();
else document.addEventListener('DOMContentLoaded', shortsremover);
