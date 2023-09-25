document.addEventListener(
    'click',
    function () { document.getElementById("logoutWrap").style.visibility = 'hidden'; },
    true
);

function showLogout() {
    document.getElementById("logoutWrap").style.visibility = 'visible';
}

var elem = document.querySelectorAll('.grid');
var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: 200
});

var msnry = new Masonry('.grid', {
});

function logout() {
    window.location.href = window.location.href.split("/")[0] + "/logout/"
}

function uploadAlbum() {
    document.getElementById("addAlbumModal").style.visibility = "visible"
}

function closeAddAlbum() {
    document.getElementById("addAlbumModal").style.visibility = "hidden";
    document.getElementById('message').textContent = "";
    document.getElementById('albumtitle').value = "";
}

function showInput() {
    document.getElementById("photoinput").click()
}

function handleFile() {
    document.getElementById("addbutton").click()
}

function handleFav() {
    document.getElementById("submitfavorite").click()
}

function handleTrash() {
    document.getElementById("submittrash").click()
}

function handleDeletePhoto() {
    document.getElementById("submitdelete").click()
}

function addToAlbum(title) {
    document.getElementById("albumtitleinput").value = title
    document.getElementById("submitphototoalbum").click()
}

function showAddToAlbum() {
    document.getElementById("albumModal").style.visibility = "visible"
}

function closeAddToAlbum() {
    document.getElementById("albumModal").style.visibility = "hidden"
}

function handleleavealbum() {
    document.getElementById("submitleavealbum").click()
}

function deleteall() {
    document.getElementById("submitdeleteall").click()
}

function showDeleteConfirm() {
    document.getElementById("deleteConfirm").style.visibility = "visible"
}

function closeDeleteConfirm() {
    document.getElementById("deleteConfirm").style.visibility = "hidden"
}

function albumsubmit() {
    if (document.albumuploadform.albumtitle.value == '') {
        message = "請輸入相簿標題"
        document.getElementById('message').textContent = message;
        return false;
    }
}

function deleteToAlbum(id) {
    document.getElementById("phototoalbum").value = id
    document.getElementById("submitdeleteToAlbum").click()
}

function showdeleteToAlbum() {
    document.getElementById("deleteAlbumModal").style.visibility = "visible"
}

function closedeleteToAlbum() {
    document.getElementById("deleteAlbumModal").style.visibility = "hidden"
}