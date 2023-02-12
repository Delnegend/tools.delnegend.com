const main = {
  InputFields: (title, placeholder, id) => {
    return new Promise(resolve => {
      resolve(`
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">${title}</span>
          </div>
          <input
            oninput="main.ChangeResult()"
            type="text"
            class="form-control"
            placeholder="${placeholder}"
            aria-label="${placeholder}"
            id="${id}">
          </div>
        `);
    });
  },
  Copy: string => {
    // copy to clipboard
    let copyText = document.createElement("textarea");
    copyText.value = string;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.body.removeChild(copyText);
    alert("Copied the text: " + copyText.value);
    // show alert
  },
  input_fields: [{
    "title": "Movie name",
    "placeholder": "Puss In Boots: The Last Wish,...",
    "id": "mediaTitle"
  }, {
    "title": "Release year",
    "placeholder": "2010, 2020, 2030...",
    "id": "releaseYear"
  }, {
    "title": "Format/Resolution",
    "placeholder": "IMAX 2160p, 1080p...",
    "id": "resolution"
  }, {
    "title": "Source",
    "placeholder": "DNSP WEB-DL, BluRay,...",
    "id": "source"
  }, {
    "title": "Audio format",
    "placeholder": "DDP5.1 Atmos, AAC2.0,...",
    "id": "audioCodec"
  }, {
    "title": "Video format",
    "placeholder": "DV HDR10 x265,...",
    "id": "videoCodec"
  }, {
    "title": "Uploader",
    "placeholder": "ION10, CM, SMURF,...",
    "id": "uploader"
  }],
  ChangeResult: function () {
    let movie_name_result = ""
    this.input_fields.forEach(elem => {
      let input_elem = document.getElementById(elem.id);
      let input_value = input_elem.value.replace(/\ +/g, ".")
      let __not_empty = input_value !== "";
      let __is_first_input = input_elem.id === this.input_fields[0].id;
      let __is_uploader = input_elem.id === "uploader";
      if (__not_empty) {
        if (__is_first_input) {
          movie_name_result += input_value;
        } else if (__is_uploader) {
          movie_name_result += "-" + input_value;
        } else {
          movie_name_result += "." + input_value;
        }
      }
    });
    document.getElementsByClassName("output")[0].innerHTML = movie_name_result;
  }
};
main.input_fields.forEach(async elem => {
  let data = await main.InputFields(elem.title, elem.placeholder, elem.id);
  document.getElementsByClassName("input-container")[0].insertAdjacentHTML("beforeend", data);
});

document.getElementById("generate").addEventListener("click", () => {
  main.Copy(document.getElementsByClassName("output")[0].innerHTML);
});
