
let listMovie = [
    {
        name: "Halloween Chết Chóc",
        img: "./img/halloween-kill-halloween-chet-choc 1.jpg",
        dateStar: " 29 / 12 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "KD",
        style: "Kinh Dị"
    },

    {
        name: "Hạ Cánh Nơi Anh",
        img: "./img/ha_canh_noi_anh.jpg",
        dateStar: "22 / 02 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "TC",
        style: "Tình Cảm"
    },
    {
        name: "Scream",
        img: "./img/scream.jpg",
        dateStar: "16 / 10 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "KD",
        style: "Kinh Dị"
    },
    {
        name: "Fast_X",
        img: "./img/fast_x.jpg",
        dateStar: "27 / 05 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "HD",
        style: "Hành Động"
    },


    {
        name: "Morbius",
        img: "./img/morbius.jpg",
        dateStar: "30 / 09 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "KD",
        style: "Kinh Dị"
    },

    {
        name: "Bay Vào Tử Địa",
        img: "./img/bay_vao_tu_dia.jpg",
        dateStar: "26 / 06 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "HD",
        style: "Hành Động"
    },
    {
        name: "Hôn Lễ Của Em",
        img: "./img/hon_le_cua_em.jpg",
        dateStar: " 28 / 07 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",

        ID: "TC",
        style: "Tình Cảm"
    },
    {
        name: "Thế Giới Lưỡng Tử",
        img: "./img/the_gioi_luong_tu.jpg",
        dateStar: "24 / 01 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "HD",
        style: "Hành Động"
    },



    {
        name: "Đừng Nói Khi Yêu",
        img: "./img/dung-noi-khi-yeu-phim-viet-nam.jpg",
        dateStar: "23 / 03 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "TC",
        style: "Tình Cảm "
    },
    {
        name: "Aquaman and the lost kingdom",
        img: "./img/aquaman_and_the_lost_kingdom.jpg",
        dateStar: "25 / 08 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "HD",
        style: "Hành Động"
    },
    {
        name: "Quãng Đời Còn Lại Xin Chỉ Giáo Nhiều Hơn",
        img: "./img/quang_doi_con_lai_xin_chi_giao_nhieu_hon.jpg",
        dateStar: "18 / 11 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "TC",
        style: "Tình Cảm"
    },
    {
        name: "Texas Chainsaw Massacre",
        img: "./img/texas_chainsaw_masacre.jpg",
        dateStar: "21 / 04 / 2023",
        info: "nfawailjdfw[fawailjdfwwfjoifnvijsdb hb jawnjd iwfhu",
        ID: "KD",
        style: "Kinh Dị"
    },
]

// document.querySelector("#type").setAttribute("onClick", "javascript: renderTypeOfMovie();");
// renderListMovie(listMovie);

// document.querySelector("#ALL").addEventListener("onclick", function () {
//     renderListMovie(listMovie);
// });
let originalList = [...listMovie];

renderListMovie(listMovie);

document.querySelector("#filter").addEventListener("change", function () {
    const selectedValue = this.value;

    if (selectedValue === "date") {
        listMovie.sort(compareDate);
        renderListMovie(listMovie);
    } else if (selectedValue === "genre") {
        renderTypeOfMovie();
    }
});

document.querySelector("#ALL").addEventListener("click", function () {
    document.querySelector("#filter").value = "genre";
    listMovie = [...originalList];
    renderListMovie(listMovie);
});



function compareDate(a, b) {
    const dateA = new Date(a.dateStar.split(" / ").reverse().join("-"));
    const dateB = new Date(b.dateStar.split(" / ").reverse().join("-"));
    return dateA - dateB;
}

function renderByGenre() {
    const selectedGenre = document.querySelector("#filter").value;
    if (selectedGenre === "genre") {
        listMovie = [...originalList];
        renderListMovie(listMovie);
    } else {
        const filteredMovies = originalList.filter(movie => movie.ID === selectedGenre);
        renderListMovie(filteredMovies);
    }
}

function renderTypeOfMovie() {
    let array1 = [];
    let array2 = [];
    let array3 = []
    let result = []
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].ID.includes("HD")) {
            array1.push(listMovie[i])
        } else if (listMovie[i].ID.includes("KD")) {
            array2.push(listMovie[i]);
        } else if (listMovie[i].ID.includes("TC")) {
            array3.push(listMovie[i]);
        }
    }
    result = result.concat(array1, array2, array3)
    renderListMovie(result);
}


function renderListMovie(param) {
    let result = "";
    for (let i = 0; i < param.length; i++) {
        result += `
        <div class="product-item">
            <div class="img-product">
                <img src="${param[i].img}" alt="">
            </div>
            <div class="infor-product">
                <h2>Tên phim: ${param[i].name}</h2>
                <h4>Ngày công chiếu: ${param[i].dateStar}</h4>
                <p>Nội dung: ${param[i].info}</p>
                <p>Thể loại: ${param[i].style}</p>
            </div>
        </div>
        `;
    }
    document.querySelector(".body").innerHTML = result;
}
document.querySelector("#pHD").setAttribute("onClick", "javascript: render1();");
document.querySelector("#pKD").setAttribute("onClick", "javascript: render2();");
document.querySelector("#pTC").setAttribute("onClick", "javascript: render3();");

// tao ham render tung loai phim 
function render1() {
    let array1 = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].ID.includes("HD")) {
            array1.push(listMovie[i])
        }
    }
    renderListMovie(array1);


}

function render2() {
    let array1 = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].ID.includes("KD")) {
            array1.push(listMovie[i])
        }
    }
    renderListMovie(array1);
}


function render3() {
    let array1 = [];
    for (let i = 0; i < listMovie.length; i++) {
        if (listMovie[i].ID.includes("TC")) {
            array1.push(listMovie[i])
        }
    }
    renderListMovie(array1);
}










