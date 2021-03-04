var CSV = {
  delimiter: ",",
  detectedDelimiter: ",",
  autodetect: true,
  quote: '"',
  quoteCharCnt: {
    "'": 0,
    '"': 0
  },
  detectedQuote: '"',
  outputQuote: '"',
  limit: '',
  isFirstRowHeader: true,
  headerToUpper: false,
  headerToLower: false,
  skipEmptyRows: true,
  skipEmptyRowCnt: 0,
  skip: 0,
  relaxedMode: true,
  ignoreQuote: false,
  relaxedInfo: {},
  excelMode: true,
  sortNeeded: false,
  addSequence: false,
  fieldImbalance: false,
  fieldImbalanceRows: [],
  headerImbalance: false,
  headerImbalanceRows: [],
  headerErrors: [],
  decodeBackslashLiterals: false,
  decimalChar: function () {
    return (0).toFixed(1).charAt(1);
  },
  maxColumnsFound: 0,
  headerColumns: 0,
  prevColumnsFound: 0,
  dataRowsFound: 0,
  arHeaderRow: [],
  table: [],
  statsCnt: [],
  displayPoss: "",
  sortPoss: "",
  sortIgnoreCase: false,
  useStringSub: false,
  stringSubMap: [
    ["null", "", false]
  ],
  unescapeLiterals: function (s) {
    var j;
    var n = s.length - 1;
    var c;
    for (j = 0; j < n; j += 1) {
      c = s.charAt(j);
      if (c == "\\") {
        switch (s.charAt(j + 1)) {
          case '\\':
            c = "\\";
            j += 1;
            break;
          case 'b':
            c = "\b";
            j += 1;
            break;
          case 'f':
            c = "\f";
            j += 1;
            break;
          case 'n':
            c = "\n";
            j += 1;
            break;
          case 'r':
            c = "\r";
            j += 1;
            break;
          case 't':
            c = "\t";
            j += 1;
            break;
          case 'v':
            c = "\v";
            j += 1;
            break;
          case '"':
            c = '"';
            j += 1;
            break;
          case "'":
            c = "'";
            j += 1;
            break;
          case ",":
            c = ",";
            j += 1;
            break;
          default:
            break;
        }
      }
      a.push(c);
    }
    if (j == n) {
      a.push(s.charAt(n));
    }
    return a.join('');
  },
  parse: function (csv, reviver) {
    var j, k;
    var s = "";
    var ss = "";
    reviver = reviver || function (r, c, v) {
      return v;
    };
    this.table = [];
    this.statsCnt = [];
    this.arHeaderRow = [];
    this.maxColumnsFound = 0;
    this.dataRowsFound = 0;
    this.headerColumns = 0;
    this.relaxedInfo = {};
    var c = 0;
    var prevCh = "";
    var start, end, row;
    var cnt = 0;
    var equalUsed = false;
    var savestart;
    var linestart;
    var spacesFound = false;
    var firstRowColumnsFound = 0;
    var brcnt = 0;
    var chars;
    var cc;
    var h = "";
    if (this.limit !== '' && isNaN(this.limit)) {
      this.limit = '';
    }
    if (this.skip !== '' && isNaN(this.skip)) {
      this.skip = 0;
    }
    if (this.skip === '' || this.skip < 0) {
      this.skip = 0;
    }
    if (this.skip > 0) {
      var p = 0;
      cnt = 0;
      for (j = 0; j < csv.length; j += 1) {
        if (csv.charAt(j) == '\n' || (csv.charAt(j) == '\r' && (j == csv.length - 1 || csv.charAt(j + 1) != '\n'))) {
          cnt += 1;
          if (cnt >= this.skip) {
            p = j + 1;
            break;
          }
        }
      }
      if (cnt < this.skip) {
        p = csv.length;
      }
      csv = csv.substr(p);
    }
    chars = csv.split('');
    cc = chars.length;
    csv = "";
    detect = {
      comma: 0,
      semi: 0,
      tab: 0,
      pipe: 0,
      colon: 0,
      space: 0,
      caret: 0
    };
    this.quoteCharCnt = {
      "'": 0,
      '"': 0
    };
    for (j = 0; j < cc; j += 1) {
      if (j > 1 && (chars[j] == '\r' || chars[j] == '\n')) {
        break;
      }
      if (chars[j] == ",") {
        detect.comma += 1;
      }
      if (chars[j] == ";") {
        detect.semi += 1;
      }
      if (chars[j] == "\t") {
        detect.tab += 1;
      }
      if (chars[j] == "|") {
        detect.pipe += 1;
      }
      if (chars[j] == ":") {
        detect.colon += 1;
      }
      if (chars[j] == "^") {
        detect.caret += 1;
      }
      if (chars[j] == " ") {
        detect.space += 1;
      }
    }
    this.detectedDelimiter = this.delimiter || ',';
    if (detect.tab > 0 && detect.tab >= detect.comma && detect.tab >= detect.pipe && detect.tab >= detect.semi && detect.tab >= detect.colon && detect.tab > detect.caret) {
      this.detectedDelimiter = "\t";
    } else if (detect.semi > 0 && detect.semi > detect.comma && detect.semi > detect.pipe && detect.semi > detect.tab && detect.semi > detect.colon && detect.semi > detect.caret) {
      this.detectedDelimiter = ";";
    } else if (detect.colon > 0 && detect.colon > detect.comma && detect.colon > detect.pipe && detect.colon > detect.tab && detect.colon > detect.semi && detect.colon > detect.caret) {
      this.detectedDelimiter = ":";
    } else if (detect.pipe > 0 && detect.pipe > detect.comma && detect.pipe > detect.semi && detect.pipe > detect.tab && detect.pipe > detect.colon && detect.pipe > detect.caret) {
      this.detectedDelimiter = "|";
    } else if (detect.caret > 0 && detect.caret > detect.comma && detect.caret > detect.pipe && detect.caret > detect.semi && detect.caret > detect.tab && detect.caret > detect.colon) {
      this.detectedDelimiter = "^";
    } else if (detect.comma > detect.tab && detect.comma > detect.pipe && detect.comma > detect.semi && detect.comma > detect.colon && detect.comma > detect.caret) {
      this.detectedDelimiter = ",";
    } else {
      this.detectedDelimiter = ",";
    }
    if (detect.tab === 0 && detect.comma === 0 && detect.pipe === 0 && detect.colon === 0 && detect.semi === 0 && detect.caret === 0 && detect.space > 0) {
      this.detectedDelimiter = " ";
    }
    if (this.autodetect) {
      this.delimiter = this.detectedDelimiter;
    }
    this.skipEmptyRowCnt = 0;
    while (c < cc) {
      if (this.skipEmptyRows && (chars[c] == '\r' || chars[c] == '\n')) {
        c += 1;
        this.skipEmptyRowCnt += 1;
        continue;
      }
      this.table.push(row = []);
      if (this.addSequence && row.length === 0 && this.table.length === 1 && this.isFirstRowHeader) {
        row.push("#");
      } else if (this.addSequence && row.length === 0) {
        row.push("" + (cnt + 1 - (this.isFirstRowHeader ? 1 : 0)));
      }
      spacesFound = false;
      linestart = c;
      while (c < cc && chars[c] !== '\r' && chars[c] !== '\n') {
        savestart = start = end = c;
        if (this.relaxedMode) {
          while (chars[c] === ' ') {
            c += 1;
            spacesFound = true;
          }
          if (chars[c] === this.quote && !this.ignoreQuote) {
            if (spacesFound && !this.relaxedInfo["" + (this.table.length + brcnt)]) {
              this.relaxedInfo["" + (this.table.length + brcnt)] = {
                "error": 1,
                "column": c - linestart + 1
              };
            }
            start = c;
          } else {
            c = savestart;
          }
        }
        if (this.excelMode) {
          if ((chars[c] === '=') && (c + 1 < cc) && (chars[c + 1] === this.quote)) {
            start = c += 1;
            equalUsed = true;
          }
        }
        if (this.quote === chars[c] && !this.ignoreQuote) {
          start = end = c += 1;
          this.quoteCharCnt[this.quote] += 1;
          while (c < cc) {
            if (chars[c] === this.quote) {
              if (this.quote !== chars[c + 1]) {
                break;
              } else {
                chars[c += 1] = '';
              }
            }
            end = c += 1;
          }
          if (chars[c] === this.quote) {
            c += 1;
            if (c < cc && chars[c] !== '\r' && chars[c] !== '\n' && this.delimiter !== chars[c]) {
              if (!this.relaxedInfo["" + (this.table.length + brcnt)]) {
                this.relaxedInfo["" + (this.table.length + brcnt)] = {
                  "error": 2,
                  "column": c - linestart + 1
                };
              }
            }
          } else {
            if (!this.relaxedInfo["" + (this.table.length + brcnt)]) {
              this.relaxedInfo["" + (this.table.length + brcnt)] = {
                "error": 3,
                "column": c - linestart + 1
              };
            }
          }
          while (c < cc && chars[c] !== '\r' && chars[c] !== '\n' && this.delimiter !== chars[c]) {
            c += 1;
          }
        } else {
          prevCh = "";
          while (c < cc && chars[c] !== '\r' && chars[c] !== '\n') {
            if (chars[c] === this.delimiter && !this.decodeBackslashLiterals) {
              break;
            }
            if (chars[c] === this.delimiter && this.decodeBackslashLiterals && prevCh !== "\\") {
              break;
            }
            prevCh = chars[c];
            end = c += 1;
          }
        }
        row.push(reviver(this.table.length - 1, row.length, chars.slice(start, end).join('')));
        if (this.decodeBackslashLiterals) {
          row[row.length - 1] = this.unescapeLiterals(row[row.length - 1]);
        }
        if (this.delimiter == ' ') {
          while (c < cc && chars[c] == this.delimiter) {
            c += 1;
          }
        }
        if (this.delimiter === chars[c]) {
          c += 1;
        }
      }
      if (chars[c - 1] == this.delimiter && this.delimiter != ' ') {
        row.push(reviver(this.table.length - 1, row.length, ''));
      }
      if (row.length > this.maxColumnsFound) {
        this.maxColumnsFound = row.length;
      }
      if (chars[c] === '\r') {
        c += 1;
      }
      if (chars[c] === '\n') {
        c += 1;
      }
      if (!this.isFirstRowHeader || cnt > 0) {
        for (j = 0; j < row.length; j += 1) {
          if (j >= this.statsCnt.length || cnt === 0) {
            this.statsCnt[j] = {
              dateCnt: 0,
              intCnt: 0,
              realCnt: 0,
              emptyCnt: 0,
              bitCnt: 0,
              logicalCnt: 0,
              equalUsed: false,
              fieldType: "",
              fieldDecs: 0,
              fieldPrec: 0,
              fldMinLen: Number.MAX_VALUE,
              fldMaxLen: 0
            };
          }
          s = (j < row.length) ? row[j].replace(/^\s+|\s+$/g, '') : "";
          if (this.excelMode && s.length > 2 && s.substr(0, 2) === '="' && s.substr(s.length - 1) === this.quote) {
            this.statsCnt[j].equalUsed = true;
            var e = new RegExp(this.quote + this.quote, "gmi");
            s = row[j] = s.substr(2, s.length - 3).replace(e, this.quote);
          }
          if (this.useStringSub) {
            for (z = 0; z < this.stringSubMap.length; z += 1) {
              if (s.toUpperCase() == this.stringSubMap[z][0].toUpperCase()) {
                s = this.stringSubMap[z][1];
                break;
              }
            }
          }
          var ch = "'";
          if (ch === this.quote) {
            ch = '"';
          }
          if (s.charAt(0) === ch && s.endsWith(ch)) {
            this.quoteCharCnt[ch] += 1;
          }
          if (s === "") {
            this.statsCnt[j].emptyCnt += 1;
          } else {
            if (s.length < this.statsCnt[j].fldMinLen) {
              this.statsCnt[j].fldMinLen = s.length;
            }
            if (s.length > this.statsCnt[j].fldMaxLen) {
              this.statsCnt[j].fldMaxLen = s.length;
            }
          }
          ss = s;
          if (ss !== "" && ss.isNumeric()) {
            this.statsCnt[j].realCnt += 1;
            var dc = ss.split(this.decimalChar());
            if (dc[0].length > this.statsCnt[j].fieldPrec) {
              this.statsCnt[j].fieldPrec = dc[0].length;
            }
            if (dc.length > 1) {
              if (dc[1].length > this.statsCnt[j].fieldDecs) {
                this.statsCnt[j].fieldDecs = dc[1].length;
              }
            }
            if (s.indexOf(this.decimalChar()) < 0) {
              this.statsCnt[j].intCnt += 1;
            }
            if (s === "0" || s === "1") {
              this.statsCnt[j].bitCnt += 1;
            }
          }
          if (s.isDateMaybe()) {
            this.statsCnt[j].dateCnt += 1;
          }
          if (s.toUpperCase() === "TRUE" || s.toUpperCase() === "FALSE") {
            this.statsCnt[j].logicalCnt += 1;
          }
        }
      }
      cnt += 1;
      if (this.limit !== '' && cnt - (this.isFirstRowHeader ? 1 : 0) >= this.limit * 1) {
        break;
      }
    }
    if (cnt <= 0) {
      this.dataRowsFound = 0;
    } else {
      this.dataRowsFound = cnt - (this.isFirstRowHeader ? 1 : 0);
    }
    this.headerErrors = [];
    if (this.isFirstRowHeader && this.table.length > 0) {
      this.arHeaderRow = this.table.shift();
      this.headerColumns = this.arHeaderRow.length;
      for (j = 0; j < this.headerColumns; j += 1) {
        if (this.arHeaderRow[j].trim() === "") {
          this.headerErrors.push({
            "error": 1,
            "field": (j + 1)
          });
        }
      }
      for (j = 0; j < this.maxColumnsFound; j += 1) {
        if (!this.arHeaderRow[j] || this.arHeaderRow[j] === "") {
          this.arHeaderRow[j] = "FIELD" + (j + 1);
        }
        this.arHeaderRow[j] = this.arHeaderRow[j].trim();
      }
    }
    this.fieldImbalance = false;
    this.fieldImbalanceRows = [];
    this.headerImbalanceRows = [];
    this.headerImbalance = false;
    firstRowColumnsFound = this.dataRowsFound > 0 ? this.table[0].length : 0;
    for (k = 0; k < this.table.length; k += 1) {
      if (this.table[k].length < this.maxColumnsFound) {
        for (j = this.table[k].length; j < this.maxColumnsFound; j += 1) {
          if (j >= this.statsCnt.length) {
            this.statsCnt[j] = {
              dateCnt: 0,
              intCnt: 0,
              realCnt: 0,
              emptyCnt: 0,
              bitCnt: 0,
              logicalCnt: 0,
              equalUsed: false,
              fieldType: "",
              fieldDecs: 0,
              fieldPrec: 0,
              fldMinLen: Number.MAX_VALUE,
              fldMaxLen: 0
            };
          }
          this.statsCnt[j].emptyCnt += 1;
        }
      }
      if (this.isFirstRowHeader && this.headerColumns != this.table[k].length) {
        this.headerImbalance = true;
        if (this.headerImbalanceRows.length < 5) {
          this.headerImbalanceRows.push(k + 2);
        }
      }
      if (!this.isFirstRowHeader && firstRowColumnsFound != this.table[k].length) {
        this.fieldImbalance = true;
        if (this.fieldImbalanceRows.length < 5) {
          this.fieldImbalanceRows.push(k + 1);
        }
      }
    }
    if (this.arHeaderRow.length > 0) {
      for (j = 0; j < this.arHeaderRow.length; j += 1) {
        this.determineCsvColType(j);
      }
    } else if (this.table.length > 0) {
      for (j = 0; j < this.maxColumnsFound; j += 1) {
        if (!this.arHeaderRow[j] || this.arHeaderRow[j] === "") {
          this.arHeaderRow[j] = "FIELD" + (j + 1);
        }
        this.determineCsvColType(j);
      }
    }
    for (j = 0; j < this.arHeaderRow.length; j += 1) {
      if (this.headerToUpper) {
        this.arHeaderRow[j] = this.arHeaderRow[j].toUpperCase();
      }
      if (this.headerToLower) {
        this.arHeaderRow[j] = this.arHeaderRow[j].toLowerCase();
      }
    }
    if (this.sortPoss !== "") {
      this.table.sort(this.sortCsv);
    }
    if (this.quoteCharCnt['"'] >= this.quoteCharCnt["'"]) {
      this.detectedQuote = '"';
    } else {
      this.detectedQuote = "'";
    }
    return 0;
  },
  setSortFlds: function (flds) {
    CSV.sortPoss = flds.trim();
  },
  sortCsv: function (a, b) {
    if (CSV.sortPoss === "") {
      return 0;
    }
    p = CSV.sortPoss.split(",");
    for (j = 0; j < p.length; j += 1) {
      q[j] = 1;
      t[j] = "";
      if (p[j].right(1).toUpperCase() == 'D') {
        q[j] = -1;
        p[j] = p[j].left(p[j].length - 1);
      }
      switch (p[j].left(1).toUpperCase()) {
        case 'C':
          t[j] = 'C';
          p[j] = p[j].right(p[j].length - 1);
          break;
        case 'N':
          t[j] = 'N';
          p[j] = p[j].right(p[j].length - 1);
          break;
        default:
          break;
      }
    }
    for (j = 0; j < p.length; j += 1) {
      if (!isNaN(p[j])) {
        p[j] = (p[j] * 1) - 1;
      } else {
        p[j] = -1;
      }
    }
    for (j = 0; j < p.length; j += 1) {
      if (p[j] >= a.length) {
        p[j] = -1;
      }
    }
    for (j = 0; j < p.length; j += 1) {
      if (p[j] < 0) {
        continue;
      }
      if (!isNaN(a[p[j]].replace(/[\$,]/g, "")) && !isNaN(b[p[j]].replace(/[\$,]/g, "")) && CSV.dataRowsFound == CSV.statsCnt[p[j]].realCnt + CSV.statsCnt[p[j]].emptyCnt && t[j] != 'C') {
        if (a[p[j]].replace(/[\$,]/g, "") * 1 < b[p[j]].replace(/[\$,]/g, "") * 1) {
          return -1 * q[j];
        }
        if (a[p[j]].replace(/[\$,]/g, "") * 1 > b[p[j]].replace(/[\$,]/g, "") * 1) {
          return 1 * q[j];
        }
      } else {
        if (CSV.sortIgnoreCase) {
          if (a[p[j]].toUpperCase() < b[p[j]].toUpperCase()) {
            return -1 * q[j];
          }
          if (a[p[j]].toUpperCase() > b[p[j]].toUpperCase()) {
            return 1 * q[j];
          }
        } else {
          if (a[p[j]] < b[p[j]]) {
            return -1 * q[j];
          }
          if (a[p[j]] > b[p[j]]) {
            return 1 * q[j];
          }
        }
      }
    }
    return 0;
  },
  determineCsvColType: function (colPos) {
    var j = 0;
    var k = 0;
    if (this.table.length === 0) {
      return "";
    }
    if (colPos >= this.statsCnt.length) {
      this.statsCnt[colPos] = {
        dateCnt: 0,
        intCnt: 0,
        realCnt: 0,
        emptyCnt: 0,
        bitCnt: 0,
        logicalCnt: 0,
        fieldType: ""
      };
    }
    if (this.table.length == this.statsCnt[colPos].bitCnt) {
      this.statsCnt[colPos].fieldType = "B";
      return "B";
    }
    if (this.table.length == this.statsCnt[colPos].logicalCnt) {
      this.statsCnt[colPos].fieldType = "L";
      return "L";
    }
    if (this.table.length == this.statsCnt[colPos].dateCnt) {
      this.statsCnt[colPos].fieldType = "D";
      return "D";
    }
    if (this.table.length == this.statsCnt[colPos].intCnt) {
      this.statsCnt[colPos].fieldType = "I";
      return "I";
    }
    if (this.table.length == this.statsCnt[colPos].realCnt) {
      this.statsCnt[colPos].fieldType = "N";
      return "N";
    }
    if (this.statsCnt[colPos].bitCnt > 0 && this.table.length == this.statsCnt[colPos].bitCnt + this.statsCnt[colPos].emptyCnt) {
      this.statsCnt[colPos].fieldType = "B";
      return "B";
    }
    if (this.statsCnt[colPos].logicalCnt > 0 && this.table.length == this.statsCnt[colPos].logicalCnt + this.statsCnt[colPos].emptyCnt) {
      this.statsCnt[colPos].fieldType = "L";
      return "L";
    }
    if (this.statsCnt[colPos].dateCnt > 0 && this.table.length == this.statsCnt[colPos].dateCnt + this.statsCnt[colPos].emptyCnt) {
      this.statsCnt[colPos].fieldType = "D";
      return "D";
    }
    if (this.statsCnt[colPos].intCnt > 0 && this.table.length == this.statsCnt[colPos].intCnt + this.statsCnt[colPos].emptyCnt) {
      this.statsCnt[colPos].fieldType = "I";
      return "I";
    }
    if (this.statsCnt[colPos].realCnt > 0 && this.table.length == this.statsCnt[colPos].realCnt + this.statsCnt[colPos].emptyCnt) {
      this.statsCnt[colPos].fieldType = "N";
      return "N";
    }
    this.statsCnt[colPos].fieldType = "VC";
    return "VC";
  },
  stringify: function (eol, replacer) {
    replacer = replacer || function (r, c, v) {
      return v;
    };
    var csv = '';
    var c;
    var cc;
    var r;
    eol = eol || "\n";
    if (this.isFirstRowHeader) {
      this.table.unshift(this.arHeaderRow);
    }
    var rr = this.table.length;
    var re = new RegExp("[" + this.delimiter + "\r\n]", "gmi");
    var cell;
    for (r = 0; r < rr; r += 1) {
      if (r) {
        csv += eol;
      }
      for (c = 0, cc = this.table[r].length; c < cc; c += 1) {
        if (c) {
          csv += this.delimiter;
        }
        cell = replacer(r, c, this.table[r][c]);
        if (re.test(cell)) {
          cell = this.outputQuote + cell.replace(/"/g, this.outputQuote + this.outputQuote) + this.outputQuote;
        }
        csv += (cell || 0 === cell) ? cell : '';
      }
    }
    return csv;
  }
};