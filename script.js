let list_music = [{
        titre: "Genius ft. Sia, Diplo, Labrinth",
        artiste: "LSD",
        thumb: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
        src: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3"
    },
    {
        titre: "Rag'n'Bone Man",
        artiste: "Human",
        thumb: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
        src: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    },
    {
        titre: "Enemy",
        artiste: "Imagine Dragons",
        thumb: "./enemy-imagine.webp",
        src: "./enemy-imagine.mp3",
    }
];

// Pour les musiques je les ai volées de ce projet : https://codepen.io/JavaScriptJunkie/pen/qBWrRyg

let player = new Audio()
player.volume = 0.15
let index = 0

function seticon(ctx) {
    if (ctx.value == 0) {
        document.querySelector("#sound_ico > svg").innerHTML = '<path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z" />'
    } else if (ctx.value < 25) {
        document.querySelector("#sound_ico > svg").innerHTML = '<path d="M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z" />'
    } else if (ctx.value < 50) {
        document.querySelector("#sound_ico > svg").innerHTML = '<path d="M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z" />'
    } else if (ctx.value < 75) {
        document.querySelector("#sound_ico > svg").innerHTML = '<path d="M215.03 71.0458L126.06 159.996H24C10.74 159.996 0 170.736 0 183.996V327.996C0 341.246 10.74 351.996 24 351.996H126.06L215.03 440.946C230.06 455.976 256 445.416 256 423.976V88.0158C256 66.5558 230.04 56.0358 215.03 71.0458ZM480 255.996C480 192.466 447.94 134.056 394.23 99.7558C383.04 92.6158 368.2 95.9358 361.11 107.216C354.02 118.496 357.33 133.426 368.52 140.576C408.27 165.966 432 209.106 432 255.996C432 302.886 408.27 346.026 368.52 371.416C357.33 378.556 354.02 393.486 361.11 404.776C367.62 415.136 382.23 419.916 394.23 412.236C447.94 377.936 480 319.536 480 255.996ZM338.23 179.126C326.65 172.796 312.04 176.966 305.62 188.576C299.23 200.186 303.46 214.776 315.07 221.186C327.98 228.276 336 241.626 336 255.996C336 270.376 327.98 283.716 315.08 290.806C303.47 297.216 299.24 311.806 305.63 323.416C312.06 335.076 326.68 339.216 338.24 332.866C366.47 317.316 384.01 287.866 384.01 255.986C384.01 224.106 366.47 194.666 338.23 179.126Z"/>'
    } else {
        document.querySelector("#sound_ico > svg").innerHTML = '<path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" />'
    }
}

document.body.onload = (function() {
    document.querySelector("#title").innerText = list_music[index]["artiste"] + " - " + list_music[index]["titre"]
    document.querySelector("#thumbnail").src = list_music[index]["thumb"]
    document.querySelector(".backblur").style.background = 'url(' + list_music[index]["thumb"] + ')';
    document.querySelector(".backblur").style.backgroundSize = "cover";
    document.querySelector(".backblur").style.backgroundPosition = "center"; 
    player.src = list_music[0]["src"]

})

document.querySelector("#play").onclick = (function() {
    if (player.paused) {
        player.play()
        document.querySelector("#ico-pause").classList.remove('hide');
        document.querySelector("#ico-play").classList.add('hide');
    } else {
        player.pause()
        document.querySelector("#ico-play").classList.remove('hide');
        document.querySelector("#ico-pause").classList.add('hide');
    }

})

document.querySelector("#previous").onclick = (function() {
    player.pause()
    index -= 1

    if (index < 0) {
        index = list_music.length + index
    }

    player.src = list_music[index]["src"]

    player.play()
    document.querySelector("#ico-pause").classList.remove('hide');
    document.querySelector("#ico-play").classList.add('hide');
})

document.querySelector("#next").onclick = (function() {
    player.pause()
    index += 1

    if (index >= list_music.length) {
        index = index - list_music.length
    }

    player.src = list_music[index]["src"]

    player.play()
    document.querySelector("#ico-pause").classList.remove('hide');
    document.querySelector("#ico-play").classList.add('hide');
})

document.querySelector("#shuffle").onclick = (function() {
    player.pause()
    index = 0
    list_music = list_music.sort(() => Math.random() - 0.5)
    player.src = list_music[index]["src"]
    player.play()
    document.querySelector("#ico-pause").classList.remove('hide');
    document.querySelector("#ico-play").classList.add('hide');
})

document.querySelector("#restart").onclick = (function() {
    player.pause()
    index = 0
    player.src = list_music[index]["src"]
    player.play()
    document.querySelector("#ico-pause").classList.remove('hide');
    document.querySelector("#ico-play").classList.add('hide');
})

document.querySelector("#volume").oninput = (function() {
    player.volume = this.value / 100
    seticon(this)
})

document.querySelector("#position").oninput = (function() {
    player.currentTime = this.value / 100 * player.duration
})

player.ontimeupdate = (function() {
    document.querySelector("#position").value = this.currentTime * 100 / player.duration
    document.querySelector("#title").innerText = list_music[index]["artiste"] + " - " + list_music[index]["titre"]
    document.querySelector("#thumbnail").src = list_music[index]["thumb"]
    document.querySelector(".backblur").style.background = 'url(' + list_music[index]["thumb"] + ')';
    document.querySelector(".backblur").style.backgroundSize = "cover";
    document.querySelector(".backblur").style.backgroundPosition = "center"; 
})

player.onended = (function() {
    player.pause()
    index += 1

    if (index >= list_music.length) {
        index = index - list_music.length
    }

    player.src = list_music[index]["src"]

    player.play()
    document.querySelector("#ico-pause").classList.remove('hide');
    document.querySelector("#ico-play").classList.add('hide');
})

let last_volume

document.querySelector("#sound_ico").onclick = (function() {
    if (player.volume != 0) {
        last_volume = player.volume
        player.volume = 0
        document.querySelector("#volume").value = 0
    } else if (last_volume == 0 || last_volume == undefined) {
        last_volume = 0
        player.volume = 0.15
        document.querySelector("#volume").value = 15
    } else {
        player.volume = last_volume
        document.querySelector("#volume").value = last_volume * 100
        last_volume = 0
    }
    seticon(document.querySelector("#volume"))
})
