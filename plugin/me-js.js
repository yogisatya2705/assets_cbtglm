// TEMPLATE TOASTR
function callToastr(type, msg, title, position) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "rtl": false,
        "positionClass": position ? position : "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "toastClass": "alert",
        "iconClasses": {
            error: "alert-danger bg-danger",
            info: "alert-info bg-info",
            success: "alert-success bg-success",
            warning: "alert-warning bg-warning"
        }
    };

    if (title) {
        if (type == 'warning') {
            toastr.warning(`<span class="text-white">${msg}</span>`, `<span class="alert-title text-white">${title}</span>`);
        }
        if (type == 'success') {
            toastr.success(`<span class="text-white">${msg}</span>`, `<span class="alert-title text-white">${title}</span>`);
        }
        if (type == 'error') {
            toastr.error(`<span class="text-white">${msg}</span>`, `<span class="alert-title text-white">${title}</span>`);
        }
    } else {
        if (type == 'warning') {
            toastr.warning(`<span class="text-white">${msg}</span>`);
        }
        if (type == 'success') {
            toastr.success(`<span class="text-white">${msg}</span>`);
        }
        if (type == 'error') {
            toastr.error(`<span class="text-white">${msg}</span>`);
        }
    }
}

function clearValidationMsgForm(form) {
    $(form).find(".is-invalid").removeClass("is-invalid");
    $(form).find(".invalid-feedback").remove();
    $(form).find(".is-valid").removeClass("is-valid");
    $(form).find(".valid-feedback").remove();
}

function formatDateIndo(date_value, type = 'full') {
    let date = new Date(date_value);

    var tahun = date.getFullYear();
    var bulan = date.getMonth();
    var tanggal = date.getDate();

    var hari = date.getDay();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();

    switch (hari) {
        case 0:
            hari = "Minggu";
            break;
        case 1:
            hari = "Senin";
            break;
        case 2:
            hari = "Selasa";
            break;
        case 3:
            hari = "Rabu";
            break;
        case 4:
            hari = "Kamis";
            break;
        case 5:
            hari = "Jum'at";
            break;
        case 6:
            hari = "Sabtu";
            break;
    }
    switch (bulan) {
        case 0:
            bulan = "Januari";
            break;
        case 1:
            bulan = "Februari";
            break;
        case 2:
            bulan = "Maret";
            break;
        case 3:
            bulan = "April";
            break;
        case 4:
            bulan = "Mei";
            break;
        case 5:
            bulan = "Juni";
            break;
        case 6:
            bulan = "Juli";
            break;
        case 7:
            bulan = "Agustus";
            break;
        case 8:
            bulan = "September";
            break;
        case 9:
            bulan = "Oktober";
            break;
        case 10:
            bulan = "November";
            break;
        case 11:
            bulan = "Desember";
            break;
    }

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    if (type == 'full') {
        return `${hari}, ${zeroPad(tanggal, 2)} ${bulan} ${tahun} - ${zeroPad(jam, 2)}:${zeroPad(menit, 2)}:${zeroPad(detik, 2)}`;
    } else if (type == 'full_date') {
        return `${hari}, ${zeroPad(tanggal, 2)} ${bulan} ${tahun}`;
    } else if (type == 'full_time') {
        return `${zeroPad(jam, 2)}:${zeroPad(menit, 2)}:${zeroPad(detik, 2)}`;
    } else if (type == 'simple') {
        return `${zeroPad(tanggal, 2)}/${zeroPad((date.getMonth() + 1), 2)}/${tahun} ${zeroPad(jam, 2)}:${zeroPad(menit, 2)}:${zeroPad(detik, 2)}`;
    }
}
