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
// document.addEventListener('yt-navigate-finish', process);

if (document.body) shortsremover();
else document.addEventListener('DOMContentLoaded', shortsremover);


// // Execute the initial observer setup when the page is loaded
// window.onload = function() {
//     console.log('window_onloaded hide_youtube_shorts');
//     initializeObserver();  // Initialize the observer after page load
// };
// function checkScrollPosition() {
//     // Calculate the current scroll position and the total document height
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;

//     // Define a threshold (e.g., 100 pixels) before reaching the bottom
//     const threshold = 700;

//     // Check if the scroll position is within the threshold of the bottom
//     if (scrollPosition >= documentHeight - threshold) {
//         // Your function to execute when the bottom is reached
//         console.log('Bottom of the page reached');
//         shortsremover();
//     }
// }

// // Add the scroll event listener
// window.addEventListener('scroll', checkScrollPosition);

// function checkScrollPosition() {
//     // Calculate the current scroll position and the total document height
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;

//     // Define a threshold as a percentage of the viewport height (e.g., 80%)
//     const threshold = 0.5 * window.innerHeight;

//     // Check if the scroll position is within the threshold of the bottom
//     if (scrollPosition >= documentHeight - threshold) {
//         // Your function to execute when the bottom is reached
//         console.log('Approaching the bottom of the page');
//         shortsremover();
//     }
// }

// // Add the scroll event listener
// window.addEventListener('scroll', checkScrollPosition);
