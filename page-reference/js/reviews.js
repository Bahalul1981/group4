let request = new XMLHttpRequest();
let reviewData;
request.onload = function(){
    if(request.status == 200){
        reviewData = JSON.parse(request.responseText).reviewList;

        const reviewPane = document.querySelector("#review-pane");
        reviewData.forEach(e => {
            const reviewContent = document.createElement("article");
            reviewContent.className = "review-container";

            let scorePerc = ((5 - e.score) * 20) + "%";
            reviewContent.innerHTML += `
            <div class="score-bar">
                <div class="score empty"></div>
                <div class="score full" style="clip-path:inset(0% ${scorePerc} 0% 0%);"></div>
            </div>
            <p class="date-format">${e.dateSubmit}</p>
            <p class="review-message">${e.message}</p>
            <p>${e.userName}</p>
            
            `

            console.log(scorePerc)
            reviewPane.appendChild(reviewContent);
        });

    }
}
request.open('GET', './json/reviewData.json', true);
request.send(null);
