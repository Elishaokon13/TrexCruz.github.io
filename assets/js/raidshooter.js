var a = 10;
var fo = "1.0";
var upda = "Jan 19, 2022";
var ul = "https://github.com/mrepol742/released/blob/stable/Raid%20Shooter%20v";
var ab = ".apk?raw=true";
var vr = ["1.0"];
let items = document.querySelectorAll('.size12')
items.forEach((e) => {
    e.innerHTML = "53KB";
})
let items3 = document.querySelectorAll('.version')
items3.forEach((e3) => {
    e3.innerHTML = fo;
})

document.getElementById("upda").innerHTML = upda;
document.getElementById("download_btn").innerHTML = "Download Raid Shooter v" + fo;

let i2 = 10;
let interval;

function download() {
    if (!interval) {
        interval = setInterval(ct, 1000);
    }
}

function ct() {
    if (i2 <= 0) {
        document.getElementById("download_btn").innerHTML = "Download Raid Shooter v" + fo;
        window.location.href = ul + fo + ab;
        resetTimer();
    } else {
        i2--;
        document.getElementById("download_btn").innerHTML = "Downloading in " + i2 + " secs";
    }

}

function resetTimer() {
    i2 = 10;
    clearInterval(interval)
    interval = 0
}

for (var i = 0; i < vr.length; i++) {
    let a = document.createElement('a');
    a.setAttribute('href', ul + vr[i] + ab);
    a.classList.add('btn');
    a.classList.add('btn-outline-dark');
    a.classList.add('webvI');
    a.setAttribute('target', '_blank');
    a.innerHTML = "Raid Shooter v" + vr[i];
    versions.appendChild(a);
}
