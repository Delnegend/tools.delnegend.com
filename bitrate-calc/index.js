// jshint esversion: 9

const changeResult = (fpsChange = false) => {
  let width = $("#vid-width").val(),
    height = $("#vid-height").val(),
    highFPS = $("#vid-fps").attr("aria-pressed"),
    UHD_bitrate;

  if ((!fpsChange && highFPS == "true") || (fpsChange && highFPS == "false")) UHD_bitrate = 2700;
  else if ((!fpsChange && highFPS == "false") || (fpsChange && highFPS == "true")) UHD_bitrate = 1800;

  let
    res_ratio = (width * height) / (3840 * 2160),
    bitrate = Math.round(res_ratio * UHD_bitrate) / 100,
    newData;
  if (width && height && !isNaN(bitrate))
    newData = bitrate + " Mbps";
  else
    newData = "";
  $("#result").fadeOut("fast",function() {
    $(this).html(newData).fadeIn("fast");
 });
};