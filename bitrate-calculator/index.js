// jshint esversion: 9
// for (let item of [1, 2]) console.log(item);
let fns = {
  arrayClosestIndex(arr, closest_to) {
    let compare_arr = arr.map(e => {
        if (e > closest_to) e = e - closest_to;
        else if (e < closest_to) e = closest_to - e;
        return e;
      }),
      closest_val_idx = [0, compare_arr[0]];
    for (let [i, v] of compare_arr.entries())
      if (closest_val_idx[1] > v) closest_val_idx = [i, v];
    return closest_val_idx[0];
  },
  calcBitrate({
    width,
    height,
    fps
  }) {
    let w = width,
      h = height,
      src_fps = fps;
    // Danh sách các độ phân giải làm chuẩn để tính bitrate
    let base_res_data = [{
      dimension: 1920 * 1080,
      framerate: {
        // 70% of YouTube's H264 recommendation
        standard: 5.6,
        high: 8.4
      }
    }, {
      dimension: 2560 * 1440,
      framerate: {
        // 62%
        standard: 10,
        high: 14.9
      }
    }, {
      dimension: 3840 * 2160,
      framerate: {
        // 54%
        standard: 24.3,
        high: 36.7
      }
    }];
    // Megapixel of the input video
    let src_mp = w * h,
      // Get index of base res will be used for calculating the bitrate
      res_to_be_based_index = this.arrayClosestIndex(base_res_data.map(el => src_mp / el.dimension), 1),
      // NOTE - The base resolution
      based_data = base_res_data[res_to_be_based_index],
      data2calc = [];
      
    if (src_fps > 0 && src_fps <= 45) data2calc = [30, based_data.framerate.standard];
    else if (src_fps > 45) data2calc = [60, based_data.framerate.high];
    let data = ((src_mp / based_data.dimension) * 0.9 + (src_fps / data2calc[0]) * 0.1) * data2calc[1];

    // // FPS in [24; 30] => use standard bitrate
    // if (src_fps >= 24 && src_fps <= 30) data = src_mp / based_data.dimension * based_data.framerate.standard;
    // // FPS in [48; 60] => use high bitrate
    // else if (src_fps >= 48 && src_fps <= 60) data = src_mp / based_data.dimension * based_data.framerate.high;
    // else {
    //   let data2calc = [];

    //   // FPS in [39; 47) U (60; +♾) => high bitrate 
    //   if ((src_fps >= 39 && src_fps < 48) || src_fps > 60) data2calc = [60, based_data.framerate.high];
    //   // FPS in (0,24) U (30; 39) => standart bitrate
    //   else if ((src_fps > 0 && src_fps < 24) || (src_fps > 30 && src_fps < 39)) data2calc = [30, based_data.framerate.standard];

    //   data = ((src_mp / based_data.dimension) * 0.6 + (src_fps / data2calc[0]) * 0.4) * data2calc[1];
    // }
    return Math.round(data * 100) / 100;
  },
  changeResult() {
    let w = $("#vid-width").val(),
      h = $("#vid-height").val(),
      fps = $("#vid-fps").val(),
      newBitrate = this.calcBitrate({
        width: w,
        height: h,
        fps: fps
      }),
      newData;
    if (w && h && fps && !isNaN(newBitrate))
      newData = newBitrate + " Mbps";
    else
      newData = "";
    $("#result").html(newData);
  }
};
// console.log(fns.arrayClosestIndex([1, 2, 3, 4, 5, 8.9, 9], 8));
document.addEventListener("DOMContentLoaded", () => {
  for (let elem of document.querySelectorAll('input-field')) {
    let el = $(elem);
    $(elem).html(
      /* html */
      `<div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">${el.attr("title1")}</span>
        </div>
        <input oninput="fns.changeResult()" type="number" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="${el.attr("placeholder")}" id="${el.attr("_id")}">
        <div class="input-group-append">
          <span class="input-group-text">${el.attr("title2")}</span>
        </div>
      </div>`
    );
  }


});