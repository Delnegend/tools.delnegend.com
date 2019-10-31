// • • • • •
// • Chung •
// • • • • •
// #region
const aniSpeed = "fast",
  replace_html = (selector, content, duration) => {
    $(selector).fadeOut(duration, () => $(selector).html(content).fadeIn(duration));
  },
  aniAppendTo = (takeThis, appendHere, animationSpeed) => {
    if (animationSpeed == undefined) {
      animationSpeed = "normal";
    }
    $(takeThis)
      .css({
        "display": "none"
      })
      .appendTo(appendHere)
      .show(animationSpeed);
  },
  UNIQUE_ID = "_" + Date.now();
// #endregion

// • • • • • • • • • • • • • • • • •
// • Xử lý dropdown quality/format • DONE
// • • • • • • • • • • • • • • • • •
// #region
const SELECT_RES = elem => {
  let a =
    $(elem)
    .parent(".dropdown-menu")
    .parent("#qualitySelectorContainer")
    .find("#qualitySelectorBtn"),
    b = $(elem).html();
  replace_html(a, b, aniSpeed);
  a.attr("selected-res", $(elem).attr("res-data"));
};
$("#qualitySelectorContainer .dropdown-item")
  .attr("onclick", "SELECT_RES(this)");

const SELECT_TYPE = elem => {
  let a = $(elem)
    .parent(".dropdown-menu")
    .parent("#typeSelectorContainer")
    .find("#typeSelectorBtn"),
    b = $(elem).html();
  replace_html(a, b, aniSpeed);
  a.attr("selected-type", $(elem).attr("type-data"));
};
$("#typeSelectorContainer .dropdown-item").attr("onclick", "SELECT_TYPE(this)");
// #endregion

// • • • • • • • • • • • • • • • • • •
// • Clone template đã xử lý vào UIS • DONE
// • • • • • • • • • • • • • • • • • •
// #region
aniAppendTo($("#templateSkeleton .episode_container").clone(), ("#user_interact_section"));
// #endregion

// • • • • • • • • •
// • animated show • DONE
// • • • • • • • • •
// #region
$(".showin").attr("style", "display:none");
$(".showin").show(aniSpeed);
// #endregion

// • • • • • • • • • • • •
// • Xử lý phần sources  • DONE
// • • • • • • • • • • • •
// #region
// Clone #singleSrcContainer từ template vào #temp_zone
$("#templateSkeleton #sourceWarpper #singleSrcContainer")
  .clone()
  .appendTo("#templateSkeleton #temp_zone");
// Chỉnh chức năng nút addSource trong #singleSrcContainer trong #temp_zone
$("#temp_zone #addSourceBtn")
  .attr("onclick", "$(this).parent('#singleSrcContainer').hide(aniSpeed).delay(10).queue(() => $(this).remove())")
  .removeAttr("id")
  .html("➖");
// Event onclick thêm source
const addSrcBtnFn = elem => {
  let a = $("#temp_zone #singleSrcContainer").clone(),
    b = $(elem).parent("#singleSrcContainer").parent("#sourceWarpper");
  aniAppendTo(a, b, aniSpeed);
};
// #endregion

// • • • • • • • • • • • •
// • Xử lý phần captions • DONE
// • • • • • • • • • • • •
// #region
// Clone .singleCapElem từ template vào #temp_zone
$("#templateSkeleton #captionContainer .singleCapElem")
  .clone()
  .appendTo("#templateSkeleton #temp_zone");
// Chỉnh chức năng nút addSource trong .singleCapElem trong #temp_zone
$("#temp_zone #addCaptionBtn")
  .attr("onclick", "$(this).parent('.singleCapElem').hide(aniSpeed).delay(10).queue(()=>$(this).remove())")
  .removeAttr("id")
  .html("➖");
// Event onclick thêm caption
const addCapBtnFn = elem => {
  let a = $("#temp_zone .singleCapElem").clone(),
    b = $(elem).parent(".singleCapElem").parent("#captionContainer");
  aniAppendTo(a, b, aniSpeed);
};
// #endregion

// • • • • • • • • • • • •
// • Xử lý phần episodes • DONE
// • • • • • • • • • • • •
// #region
// Clone nút add thành nút remove trong template
$("#templateSkeleton #addEpBtn").clone().appendTo("#templateSkeleton .addRemoveEpBtn");
// fn remove tập
const REMOVE_EPISODE = elem => $(elem).parent(".addRemoveEpBtn").parent(".episode_container").hide(aniSpeed).delay(10).queue(() => $(this).remove());
// Edit nút remove tập
$("#templateSkeleton #addEpBtn:nth-child(2)")
  .removeAttr("id")
  .attr("onclick", "REMOVE_EPISODE(this)")
  .html("➖");
// Chức năng thêm tập
const ADD_EPISODE = elem => {
  $(elem)
    .parent(".addRemoveEpBtn")
    .parent(".episode_container")
    .after($("#templateSkeleton .episode_container").clone())
    .next().show(aniSpeed);
};
// #endregion

// • • • • • • •
// • GENERATE  •
// • • • • • • •
const generate_code = (what) => {
  // Ẩn khung export
  $("#exportedDataFrame").hide(aniSpeed);

  // Tạo 1 array chứa data
  const RAW_DATA = [];

  // Bắt đầu xử lý dữ liệu người dùng nhập
  $("#user_interact_section .episode_container").each((index, value) => {

    if ($(value).find("#title").val() != "") {
      // Set tạm các giá trị
      let processingEpElem = {},
        checkSubsExist = $(value).find("#captionContainer").find(".singleCapElem").find("#captionFullName").val(),
        inputMasPoster = $("#masterPosterInput").val(),
        inputEpPoster = $(value).find(".essentials").find("#poster").val();
      processingEpElem.title = $(value).find("#title").val();
      processingEpElem.type = "video";
      processingEpElem.sources = [];

      if (inputMasPoster != "") {
        finalMasPoster = inputMasPoster;
      } else {
        finalMasPoster = "https://dngnd.ml/khp-poster";
      }

      // Nguồn video
      $(value).find("#sourceWarpper").find(".input-group").each((index, value) => {
        let currentMediaSrc = {},
          inputSrcType = $(value).find("#typeSelectorContainer").find("#typeSelectorBtn").attr("selected-type");
        currentMediaSrc.src = $(value).find("#mediaSrc").val();

        let a = $(value).find("#qualitySelectorContainer").find("#qualitySelectorBtn").attr("selected-res");
        if (a != null) {
          currentMediaSrc.size = parseInt(a);
        } else {
          currentMediaSrc.size = 1080;
        }
        if (inputSrcType != "undefined") {
          currentMediaSrc.type = inputSrcType;
        } else {
          currentMediaSrc.type = "video/mp4";
        }
        processingEpElem.sources.push(currentMediaSrc);
      });

      // Thumbnail
      // #region
      if (inputEpPoster != "") {
        finalEpPoster = inputEpPoster;
      } else {
        finalEpPoster = finalMasPoster;
      }

      processingEpElem.poster = finalEpPoster;
      // #endregion

      // Phụ đề
      if (checkSubsExist != "") {
        processingEpElem.tracks = [];
        $(value).find("#captionContainer").find(".singleCapElem").each((index, value) => {
          let processingCaption = {};
          processingCaption.kind = "subtitles";
          processingCaption.label = $(value).find("#captionFullName").val();
          processingCaption.srclang = $(value).find("#captionShortName").val();
          processingCaption.src = $(value).find("#capionSrc").val();
          processingEpElem.tracks.push(processingCaption);
        });
      }

      // Đẩy dữ liệu người dùng nhập lên array rỗng
      RAW_DATA.push(processingEpElem);
    }
  });
  // Đấy url poster tổng lên data
  RAW_DATA.push(finalEpPoster);

  // Loại bỏ ngoặc kép phần key
  let finalCleanData = JSON.stringify(RAW_DATA).replace(/"(\w+)"\s*:/g, "$1:"),
    // URL script khplayer
    KHPLAYERJS = `&#x3C;script src=&#x22;https://dngnd.ml/khplayer-js&#x22; uniqueID="${UNIQUE_ID}"&#x3E;&#x3C;script&#x3E;`,
    // URL jQuery
    JQUERY = `&#x3C;script src=&#x22;https://dngnd.ml/latest-jquery&#x22;&#x3E;&#x3C;/script&#x3E;`,
    // Phần data
    printCodeFull = `&#x3C;div id=&#x22;${UNIQUE_ID}&#x22;&#x3E;&#x3C;/div&#x3E;<br><br>
    &#x3C;script&#x3E;<br>var ${UNIQUE_ID}_=${finalCleanData}<br>&#x3C;/script&#x3E;<br><br>
    ${JQUERY}<br>${KHPLAYERJS}`,
    // Lấy data và 2 thẻ script kia
    // Như chức năng trên nhưng hoàn toàn độc lập
    printCodeIsolated = "COMMING SOON !!!";
  switch (what) {
    case ("input_data"):
      $("#exportedData").html(finalCleanData);
      $("#downloadExpData").show(aniSpeed);
      break;
    case ("full_code"):
      $("#exportedData").html(printCodeFull);
      $("#downloadExpData").hide(aniSpeed);
      break;
    case ("isolated"):
      $("#exportedData").html(printCodeIsolated);
      $("#downloadExpData").hide(aniSpeed);
      break;
    default:
      console.log(new Error("wrong request type"));
  }
  $("#exportedDataFrame").show(aniSpeed);
  $("html, body").animate({ scrollTop: $(document).height() }, aniSpeed);
};
$("#genBtnData").on("click", () => {
  generate_code("input_data");
});
$("#genBtnFullCode").on("click", () => {
  generate_code("full_code");
});
$("#genBtnIsolated").on("click", () => {
  alert("Tính năng này sắp tới sẽ có. Các chế độ generate code kia đều phải load 4 file rời (2 file css, 2 file js của Plyr và K.H.Player phần playlist), điều này làm tăng thời gian load khung player từ 1 đến 2 giây nhưng trông gọn hơn. Code \" Cách ly \" sẽ generate ra đoạn code hoàn toàn độc lập, kể cả mình xóa 4 file kia đi thì code vẫn dùng bình thường.");
  generate_code("isolated");
});

new ClipboardJS("#copyCodeToCB");
document.getElementById("downloadExpData").addEventListener("click", () => {
  let text = $("#exportedData").html(),
    filename = prompt("Nhập tên file"),
    blob = new Blob([text], {
      type: "text/javascript;charset=utf-8"
    });
  saveAs(blob, filename);
});