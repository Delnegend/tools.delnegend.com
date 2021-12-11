document.addEventListener("DOMContentLoaded", () => {
  let saveFile = (string, filename) => {
    const text = string;
    const blob = new Blob([text], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, filename);
  }
  let processTime = (time) => {
    time = time / 10;
    let centisecond = time % 100;
    let second = ((time - centisecond) / 100) % 60;
    let minute = (time - centisecond - second * 100)/6000;
    if (String(centisecond).length == 1) centisecond = "0" + String(centisecond);
    if (String(second).length == 1) second = "0" + String(second);
    if (String(minute).length == 1) minute = "0" + String(minute);
    return [minute,second,centisecond];
  }
  $("#button-download").on("click", () => {
    let json_lyrics = JSON.parse($("#raw-lyrics")[0].value)?.lyrics?.lines;
    const title = $("#title")[0].value;
    let temp = [];
    temp.push("[00:00.00]"+title);
    for (const line of json_lyrics) {
      const time = processTime(line.startTimeMs);
      temp.push(`[${time[0]}:${time[1]}.${time[2]}]${line.words ? line.words : '♫'}`)
    }
    console.log(temp.join("\n"));
    saveFile(temp.join("\n"), `${title}.lrc`);
  })
});