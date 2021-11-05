// prima parte

// creo un arrey di oggetti => arrey => ok
// creo un ciclo dove prendo ogni singolo ogetto => for => ok
// con il destructuring prendo ogni chiave dell'oggetto e lo trasformo in una variabile => let {} = arrey[i] => ok
// stampo il post mettendo le variabili all'interno dell'html=> ${} => ok


//seconda parte

//attarverso un click aumento di uno il numero di like (?)

const stamp = document.getElementById("container");

const posts = [
    {
        "profilePic" : "https://unsplash.it/300/300?image=15",
        "profileName" : "Phil Mangione",
        "timePost" : "4 mesi fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPic" : "https://unsplash.it/600/300?image=171",
        "likeCounter" : 80
    },
    {
        "profilePic" : "https://i.picsum.photos/id/924/300/300.jpg?hmac=p45YuBoKzB-EkoHGMxj9apqgEx1xpuuSUUzhKEldxGM",
        "profileName" : "Gabriele Manfre'",
        "timePost" : "2 mesi fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPic" : "",
        "likeCounter" : ""
    },
    {
        "profilePic" : "https://i.picsum.photos/id/805/300/300.jpg?hmac=JtkiLmsAhdBYYB6zbXGbOrmL561JJNt3t0cnEJpLhQc",
        "profileName" : "Thomas Shelby",
        "timePost" : "1 ora fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPic" : "https://i.picsum.photos/id/946/300/300.jpg?hmac=Tfynt1R-QgkiDDO4MonY6IDwemU9rQ3IITkWfPJtO50",
        "likeCounter" : 65
    }
];

for (let i = 0; i < posts.length; i++){

    let {profilePic, profileName, timePost, postText, postPic, likeCounter} = posts[i];


    stamp.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profilePic}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${profileName}</div>
                        <div class="post-meta__time">${timePost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${postPic}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likeCounter}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    
    `

}