// jshint esversion: 10
var res = {
    "url": /((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gmi
};
var opt = {};
var listcnt = 0;
var toExcel = 0;

function initOpt() {
    opt.delimiter = radiovalue(document.forms[0].outsep);
    if (opt.delimiter == "o") {
        opt.delimiter = $("#outSepOtherVal")[0].value
    }
    if (!opt.delimiter) {
        opt.delimiter = ","
    }
    opt.limit = $("#chkLimit")[0].checked;
    opt.isRegex = $("#chkIsRegex")[0] ? $("#chkIsRegex")[0].checked :
        false;
    opt.social = $("#chkSocial")[0].checked;
    opt.socialReverse = $("#radShow")[0].checked;
    opt.anchor = $("#chkAnchor")[0].checked;
    opt.limitstr = $("#txtLimit")[0].value;
    opt.append = $("#chkAppend")[0].checked;
    opt.hdr = $("#chkCsvHeader")[0].checked;
    opt.forceCsv = $("#chkForceCsv")[0].checked;
    opt.dup = $("#chkDup")[0].checked;
    opt.sorted = $("#chkSort")[0].checked;
    opt.isList = $("#chkList")[0].checked;
    opt.includeFromUrl = $("#chkIncludeFromUrl")[0] ? $("#chkIncludeFromUrl")[0].checked : true;
    opt.heading = "URL";
}

function assignText(inputString) {
    $("#txt1")[0].value = inputString
}

function loadScriptAndRunRepeat(inputURL) {
    if (!inputURL.startsWith("?")) {
        inputURL = "?" + inputURL
    }
    loadScript("https://www.convertcsv.com/cgi-bin/url-to-json.php" + inputURL);
}

function loadDataAndRunRepeat(input) {
    opt.url = (input.url || "");
    runit(input.html.join("\x0A"), opt)
}

function loadURLRepeat(inputURL) {
    if (inputURL.trim() == "") {
        return false
    }
    loadScriptAndRunRepeat("https://www.convertcsv.com?callback=loadDataAndRunRepeat&url=" + encodeURIComponent(inputURL));
}

function runitonce(inputString, trueOrFalse) {
    var index = 0;
    var tempArray1 = [];
    initOpt();
    listcnt = 0;
    toExcel = trueOrFalse;
    if (!opt.append) {
        $("#txta")[0].value = ""
    }
    if (opt.isList) {
        tempArray1 = inputString.split((/\r\n|\r|\n/));
        if (tempArray1.length > 0 && tempArray1[tempArray1.length - 1].trim() === "") {
            tempArray1.splice(-1, 1)
        }
        for (index = 0; index < tempArray1.length; index += 1) {
            if (tempArray1[index] == "") {
                continue
            }
            if (tempArray1[index].startsWith("http")) {
                continue
            }
            if (tempArray1[index].startsWith("ftp")) {
                continue
            }
            if (tempArray1[index].startsWith("//")) {
                tempArray1[index] = "http:" + tempArray1[index]
            } else {
                tempArray1[index] = tempArray1[index] = "http://" + tempArray1[index]
            }
        }
    }
    opt.cnt = tempArray1.length;
    if (opt.isList && tempArray1.length > 0) {
        loadURLRepeat(tempArray1[0]);
        opt.append = true;
        for (index = 1; index < tempArray1.length; index += 1) {
            if (tempArray1[index].trim() === "") {
                continue
            }
            loadURLRepeat(tempArray1[index]);
        }
    } else {
        runit(inputString, opt)
    }
}

function runit(inputString, opt) {
    var index, index2, URLwithLinkTag;
    var tempArray2 = [];
    var optHeading = opt.heading;
    var numberOfCols = $("#txtNumCols")[0].value * 1 || 1;
    if (numberOfCols < 1) {
        numberOfCols = 1
    }
    var URLRegexCheck = res.url;
    var tempArray2 = inputString.match(URLRegexCheck) || [];
    var listingURL = $("#txtSocial")[0].value.split(/[ ,]/);
    listingURL = _.filter(listingURL, function (a) {
        return a.trim().length > 0
    });
    if (opt.limit && opt.limitstr.length > 0) {
        if (!opt.isRegex) {
            tempArray2 = _.reject(tempArray2, function (inputURL) {
                return inputURL.toLowerCase().indexOf(opt.limitstr.trim().toLowerCase()) == -1
            })
        } else {
            URLRegexCheck = null;
            try {
                URLRegexCheck = new RegExp(opt.limitstr, "i")
            } catch (e) { }
            if (URLRegexCheck) {
                tempArray2 = _.reject(tempArray2, function (inputURL) {
                    return !URLRegexCheck.test(inputURL)
                })
            } else {
                tempArray2 = _.reject(tempArray2, function (inputURL) {
                    return inputURL.toLowerCase().indexOf(opt.limitstr.trim().toLowerCase()) == -1
                })
            }
        }
    }
    if (opt.social) {
        {
            tempArray2 = _.reject(tempArray2, function (inputURL) {
                if (opt.socialReverse) {
                    return _.every(listingURL, function (input) {
                        return inputURL.toLowerCase().indexOf(input.trim().toLowerCase()) == -1
                    })
                } else {
                    return _.any(listingURL, function (input) {
                        return inputURL.toLowerCase().indexOf(input.trim().toLowerCase()) >= 0
                    })
                }
            })
        }
    }
    if (opt.sorted) {
        tempArray2 = tempArray2.sort()
    }
    if (opt.dup) {
        tempArray2 = _.uniq(tempArray2, true)
    }
    var tempArray3 = [];
    if (opt.hdr && numberOfCols > 1 && $("#txta")[0].value === "") {
        tempArray3.push(optHeading + "1");
        for (index = 2; index <= numberOfCols; index += 1) {
            tempArray3.push(optHeading + index)
        }
        optHeading = tempArray3.join(opt.delimiter);
    }
    if (opt.hdr && $("#txta")[0].value === "") {
        $("#txta")[0].value = optHeading;
        if (opt.isList && numberOfCols == 1) {
            $("#txta")[0].value += opt.delimiter + "FROMURL"
        }
        $("#txta")[0].value += "\x0A";
    }
    for (index = 0; index < tempArray2.length;) {
        for (index2 = 0; index2 < numberOfCols; index2 += 1, index += 1) {
            if (index < tempArray2.length) {
                URLwithLinkTag = tempArray2[index];
                if (opt.anchor) {
                    URLwithLinkTag = "<a href=\"" + URLwithLinkTag + "\">" + URLwithLinkTag + "</a>"
                }
                if (opt.forceCsv) {
                    URLwithLinkTag = URLwithLinkTag.toCsv(opt.delimiter)
                }
                $("#txta")[0].value += URLwithLinkTag;
            }
            if (index2 < numberOfCols - 1) {
                $("#txta")[0].value += opt.delimiter
            }
        }
        if (opt.isList && numberOfCols == 1 && opt.includeFromUrl) {
            $("#txta")[0].value += opt.delimiter + (opt.url || "")
        }
        $("#txta")[0].value += "\x0A";
    }
    if (opt.isList) {
        listcnt += 1
    }
    if (toExcel && (!opt.isList || listcnt >= opt.cnt)) {
        saveExcel("txta", false)
    }
}

