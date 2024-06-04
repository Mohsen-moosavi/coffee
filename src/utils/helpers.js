import swal from "sweetalert"

function showSwal(title, icon, buttons) {
    swal({
        title,
        icon,
        buttons
    })
}

export {
    showSwal
}