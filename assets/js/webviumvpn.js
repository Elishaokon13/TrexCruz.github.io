var a = 10;
var fo = "1.0";
var ul = "https://github.com/mrepol742/released/blob/stable/Webvium%20VPN%20v";
var ab = ".apk?raw=true";
var vr = ["1.0"];
let items = document.querySelectorAll('.size12')
items.forEach((e) => {
    e.innerHTML = "7MB";
})

let items0 = document.querySelectorAll('#download_btn')
items0.forEach((e1) => {
    e1.textContent = 'Download Webvium VPN v' + fo;
})

function download() {
    window.location.href = ul + fo + ab;
}

for (var i = 0; i < vr.length; i++) {
    let a = document.createElement('a');
    a.setAttribute('href', ul + vr[i] + ab);
    a.classList.add('btn');
    a.classList.add('btn-outline-dark');
    a.classList.add('webvI');
    a.setAttribute('target', '_blank');
    a.innerHTML = "Webvium VPN v" + vr[i];
    versions.appendChild(a);
}

try {

    if (a > Webvium.currentVersion()) {
        document.getElementById("curr").innerHTML = "<b>You are using an outdated version of Webvium VPN.</b>";
    } else {
        document.getElementById("curr").innerHTML = "<b>No need to Download. You are already using the Latest version.</b>";
    }
} catch (en) {
    document.getElementById("curr").innerHTML = "By downloading Webvium VPN, you agree to its <a href=\"https://mrepol742.github.io/webviumvpn/privacypolicy\">Privacy Policy</a>";
}
