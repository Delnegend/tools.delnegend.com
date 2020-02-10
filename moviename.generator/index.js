const genMovieName = {
  inputFields: (title, placeholder, id) => {
    return new Promise(resolve => {
      resolve(`<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">${title}</span></div><input oninput="genMovieName.changeResult()" type="text" class="form-control" placeholder="${placeholder}" aria-label="${placeholder}" id="${id}"></div>`);
    });
  },
  copyToClipboard: elem => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(elem).html()).select();
    document.execCommand("copy");
    $temp.remove();
  },
  necessaryData: [{
    "title": "Tên phim",
    "placeholder": "Fast and Furious 8, Avengers,...",
    "id": "mediaTitle"
  }, {
    "title": "Năm ra mắt",
    "placeholder": "2010, 2020,...",
    "id": "releaseYear"
  }, {
    "title": "Phụ bản",
    "placeholder": "Remux, Ultimate Cut, VIE,...",
    "id": "specials"
  }, {
    "title": "Độ phân giải",
    "placeholder": "2160p, 1080p, 720p,...",
    "id": "resolution"
  }, {
    "title": "Định dạng",
    "placeholder": "NF Web-DL, BluRay, AMZN WebRip,...",
    "id": "format"
  }, {
    "title": "Mã hoá âm thanh",
    "placeholder": "AAC 2.0, DTS 5.1,...",
    "id": "audioCodec"
  }, {
    "title": "Mã hoá hình ảnh",
    "placeholder": "H264, H265, HEVC,...",
    "id": "videoCodec"
  }, {
    "title": "Tên nhóm RIP",
    "placeholder": "NTd, SPARKS,...",
    "id": "sourceAuthor"
  }],
  changeResult: () => {
    let tempName = [];
    genMovieName.necessaryData.forEach(elem => {
      let inputValue = $(`#${elem.id}`).val();
      if (inputValue != "") {
        tempName.push(`[${inputValue}]`);
      }
    });
    $(".output").html(tempName.join(""));
    if ($('.output').html() == "") {
      $('.output').hide("fast");
    } else {
      $('.output').show("fast");
    }
  }
};
genMovieName.necessaryData.forEach(async elem => {
  let data = await genMovieName.inputFields(elem.title, elem.placeholder, elem.id);
  $(".container").append(data);
});
$("#generate").click(() => {
  // $(".output").hide("fast");

  // $(".output").html(tempName.join("")).show("fast");
  genMovieName.copyToClipboard($(".output"));
});