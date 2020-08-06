(function(inJS, global, factory) {
  "use strict";
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(module)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global = global || self), factory(new Object() || {}, inJS, global));
})(window, this, function(module, win, lib) {
  Window.prototype.customAttribute = function(selector, name, value = true){
    document.querySelector(selector).setAttribute(name, value);
  }
  Window.prototype.optional = function(optional){
    if(!Array.isArray(optional)){
      module.exports.Errors.setError("Paramater must be an array.");
    }else{
      for(let i in optional){
        customAttribute(optional[i], "optional");
      }
    }
  }
  module.exports = new Object();
  module.exports.Require = {
    Javascript: function(arr, selector) {
      let script = undefined;
      for (let i in arr) {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = arr[i];
        if (selector === "head") {
          document.getElementsByTagName("head")[0].appendChild(script);
        } else if (selector === "body") {
          document.getElementsByTagName("body")[0].appendChild(script);
        }
      }
    },
    Stylesheet: function(arr, selector) {
      let link = undefined;
      for (let i in arr) {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = arr[i];
        if (selector === "head") {
          document.getElementsByTagName("head")[0].appendChild(link);
        } else if (selector === "body") {
          document.getElementsByTagName("body")[0].appendChild(link);
        }
      }
    }
  };
  module.exports.Disabled = {
    Materialize: {
      Default: atob("YnJvd3Nlci1kZWZhdWx0"),
      Input: function() {
        const input = document.querySelectorAll("input");
        input.forEach(function(i) {
          if (i.classList.length > 0) {
            i.classList.add(module.exports.Disabled.Materialize.Default);
          } else {
            i.setAttribute(
              "class",
              module.exports.Disabled.Materialize.Default
            );
          }
        });
      },
      Button: function() {
        const input = document.querySelectorAll("button");
        input.forEach(function(i) {
          if (i.classList.length > 0) {
            i.classList.add(module.exports.Disabled.Materialize.Default);
          } else {
            i.setAttribute(
              "class",
              module.exports.Disabled.Materialize.Default
            );
          }
        });
      },
      Select: function() {
        const input = document.querySelectorAll("select");
        input.forEach(function(i) {
          if (i.classList.length > 0) {
            i.classList.add(module.exports.Disabled.Materialize.Default);
          } else {
            i.setAttribute(
              "class",
              module.exports.Disabled.Materialize.Default
            );
          }
        });
      },
      Textbox: function() {
        const input = document.querySelectorAll("textbox");
        input.forEach(function(i) {
          if (i.classList.length > 0) {
            i.classList.add(module.exports.Disabled.Materialize.Default);
          } else {
            i.setAttribute(
              "class",
              module.exports.Disabled.Materialize.Default
            );
          }
        });
      }
    }
  };
  module.exports.Auth = {
    Style: (function() {
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = `
                .injs-ph-c-color::placeholder {
                    color: #fff !important;
                }
            `;
      document.querySelector("head").appendChild(style);
    })(),
    Form: {
      Match: function(title, f_selector, s_selector) {
        const f_input = document.querySelector(f_selector);
        const s_input = document.querySelector(s_selector);
        if (f_input.value !== s_input.value) {
          f_input.style.cssText = module.exports.Config.Style.inputError;
          f_input.setAttribute("placeholder", title);
          f_input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
          s_input.style.cssText = module.exports.Config.Style.inputError;
          s_input.setAttribute("placeholder", title);
          s_input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
          return [false, f_input.value, s_input.value];
        } else {
          f_input.classList.remove(atob("aW5qcy1waC1jLWNvbG9y"));
          f_input.removeAttribute("style");
          s_input.classList.remove(atob("aW5qcy1waC1jLWNvbG9y"));
          s_input.removeAttribute("style");
          return [true, f_input.value, s_input.value];
        }
      },
      Validate: function(type, title, selector) {
        const input = document.querySelector(selector);
        if (
          input.value === null ||
          input.value === "" ||
          input.value.length < 1
        ) {
          input.style.cssText = module.exports.Config.Style.inputError;
          input.setAttribute("placeholder", title);
          input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
          input.addEventListener("keyup", function() {
            if (
              input.value === null ||
              input.value === "" ||
              input.value.length <= 0
            ) {
              input.style.cssText = atob(
                "YmFja2dyb3VuZC1jb2xvcjogI2ViNGQ0YiAhaW1wb3J0YW50Ow=="
              );
              input.setAttribute("placeholder", title);
              input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
              return [false, input.value];
            } else {
              this.classList.remove(atob("aW5qcy1waC1jLWNvbG9y"));
              this.removeAttribute("style");
              return [true, input.value];
            }
          });
          return [false, input.value];
        } else {
          return [true, input.value];
        }
      },
      NumOnly: function(title, selector) {
        const input = document.querySelector(selector);
        input.addEventListener("keyup", function() {
          if (isNaN(input.value)) {
            input.style.cssText = atob(
              "YmFja2dyb3VuZC1jb2xvcjogI2ViNGQ0YiAhaW1wb3J0YW50Ow=="
            );
            input.setAttribute("placeholder", title);
            input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
            input.value = "";
            return false;
          } else {
            this.classList.remove(atob("aW5qcy1waC1jLWNvbG9y"));
            this.removeAttribute("style");
            return true;
          }
        });
      },
      EmailOnly: function(title, selector) {
        module.exports.Auth.Style();
        const input = document.querySelector(selector);
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(input.value)) {
          input.style.cssText = atob(
            "YmFja2dyb3VuZC1jb2xvcjogI2ViNGQ0YiAhaW1wb3J0YW50Ow=="
          );
          input.setAttribute("placeholder", title);
          input.classList.add(atob("aW5qcy1waC1jLWNvbG9y"));
          input.value = "";
          return false;
        } else {
          this.classList.remove(atob("aW5qcy1waC1jLWNvbG9y"));
          this.removeAttribute("style");
          return true;
        }
      }
    }
  };
  module.exports.Config = {
    Style: {
      inputError: atob(
        "Ym9yZGVyOiAxcHggc29saWQgI2Y0NDMzNiAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI0ZDRiICFpbXBvcnRhbnQ7"
      )
    }
  };
  module.exports.Sort = {
    Quick: function(arr) {
      if (arr.length <= 1) {
        return arr;
      } else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = arr.pop();
        let length = arr.length;
        for (let i = 0; i < length; i++) {
          if (arr[i] <= pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
      }
    },
    Merge: function(x, y) {
      let i = 0;
      let j = 0;
      let results = [];
      while (i < x.length || j < y.length) {
        if (i === x.length) {
          results.push(y[j]);
          j++;
        } else if (j === y.length || x[i] <= y[j]) {
          results.push(x[i]);
          i++;
        } else {
          results.push(y[j]);
          j++;
        }
      }
      return results;
    },
    RecursiveInsertion: function(arr, i = arr.length) {
      if (i <= 1) {
        return;
      }
      recursiveInsertionSort(arr, i - 1);
      let key = arr[i - 1];
      let j = i - 2;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    },
    Insertion: function(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
          arr.unshift(arr.splice(i, 1)[0]);
        } else if (arr[i] > arr[i - 1]) {
          continue;
        } else {
          for (let j = 1; j < i; j++) {
            if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
              arr.splice(j, 0, arr.splice(i, 1)[0]);
            }
          }
        }
      }
      return arr;
    },
    RecursiveBubble: function(arr, n = arr.length) {
      if (n == 1) {
        return arr;
      }
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      return recursiveBubbleSort(arr, n - 1);
    },
    Selection: function selectionSort(items) {
      let len = items.length;
      let min;
      for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
          if (items[j] < items[min]) {
            min = j;
          }
        }
        if (i != min) {
          swap(items, i, min);
        }
      }
      return items;
    },
    Bubble: function(inputArr) {
      let len = inputArr.length;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[i + 1];
            inputArr[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
      return inputArr;
    }
  };
  module.exports.Array = {
    isDuplicated: function(arr) {
      return arr.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
        return acc;
      }, []);
    },
    Create: function() {
      return new Array();
    },
    Max: function(arr) {
      let max = arr[0];
      for (let i in arr) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    },
    Min: function(arr) {
      let min = arr[0];
      for (let i in arr) {
        if (arr[i] < min) min = arr[i];
      }
      return min;
    },
    Count: function(arr) {
      return arr.length;
    },
    Empty: function(arr) {
      return (arr = []);
    },
    FindIndex: function(arr, src) {
      return arr.indexOf(src) > 0 ? arr.indexOf(src) : undefined;
    },
    HasIndex: function(arr, src) {
      return arr.includes(src) ? arr.includes(src) : false;
    },
    Reverse: function(arr) {
      return arr.reverse();
    },
    Shuffle: function(arr) {
      return arr
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
    },
    FromMaxOnly: function(arr, max) {
      return arr.filter(function(item) {
        if (arr[item] >= max) return item;
      });
    },
    FromMinOnly: function(arr, min) {
      return arr.filter(function(item) {
        if (arr[item] <= min) return item;
      });
    },
    SortFromMin: function(arr) {
      return arr.sort(function(a, b) {
        if (a < b) return -1;
        return 0;
      });
    },
    SortFromMax: function(arr) {
      return arr.sort(function(a, b) {
        if (a > b) return -1;
        return 0;
      });
    },
    Remove: function(arr, item) {
      return arr.splice(module.exports.Array.FindIndex(arr, item), 1);
    },
    Sum: function(arr) {
      return arr.reduce((partial_sum, a) => partial_sum + a, 0);
    }
  };
  module.exports.Security = {
    Basic: {
      Enc: val => btoa(val),
      Dec: val => atob(val)
    }
  };
  module.exports.Date = {
    Hour: () => new Date().getHours(),
    Minute: () => new Date().getMinutes(),
    Seconds: () => new Date().getSeconds(),
    MilliSeconds: () => new Date().getMilliseconds(),
    Clock: function() {
      // use this: setInterval(()=> {console.log(inJS.Date.RealTime())}, 1000)
      return (
        module.exports.Date.Hour() +
        ":" +
        module.exports.Date.Minute() +
        ":" +
        module.exports.Date.Seconds()
      );
    },
    Num: {
      Day: () => new Date().getUTCDate(),
      Month: () => new Date().getUTCMonth() + 1
    },
    Word: {
      Day: function() {
        switch (new Date().getUTCDay()) {
          case 0:
            return "Sunday";
            break;
          case 1:
            return "Monday";
            break;
          case 2:
            return "Tuesday";
            break;
          case 3:
            return "Wednesday";
            break;
          case 4:
            return "Thursday";
            break;
          case 5:
            return "Friday";
            break;
          case 6:
            return "Saturday";
            break;
          default:
            return "Cannot specify day";
        }
      },
      Month: function() {
        switch (module.exports.Date.Num.Month()) {
          case 1:
            return "Jan";
            break;
          case 2:
            return "Feb";
            break;
          case 3:
            return "Mar";
            break;
          case 4:
            return "Apr";
            break;
          case 5:
            return "May";
            break;
          case 6:
            return "June";
            break;
          case 7:
            return "Jul";
            break;
          case 8:
            return "Aug";
            break;
          case 9:
            return "Sep";
            break;
          case 10:
            return "Oct";
            break;
          case 11:
            return "Nov";
            break;
          case 12:
            return "Dec";
            break;
          default:
            return "Cannot specify month";
        }
      },
      FullDate: function() {
        const m = module.exports.Date.Num.Month() - 1;
        const d = module.exports.Date.Num.Day();
        let r_m;
        switch (m) {
          case 0:
            r_m = "Jan";
            break;
          case 1:
            r_m = "Feb";
            break;
          case 2:
            r_m = "Mar";
            break;
          case 3:
            r_m = "Apr";
            break;
          case 4:
            r_m = "May";
            break;
          case 5:
            r_m = "June";
            break;
          case 6:
            r_m = "Jul";
            break;
          case 7:
            r_m = "Aug";
            break;
          case 8:
            r_m = "Sep";
            break;
          case 9:
            r_m = "Oct";
            break;
          case 10:
            r_m = "";
            break;
          case 11:
            r_m = "Dec";
            break;
          default:
            return "Cannot specify current month";
        }
        return r_m + "/" + d + "/" + module.exports.Date.Year();
      }
    },
    Year: () => new Date().getUTCFullYear(),
    InFullArr: function() {
      const m = module.exports.Date.Num.Month();
      const d = module.exports.Date.Num.Day();
      return [m, d, module.exports.Date.Year()];
    },
    TimeStamp: () => +new Date(),
    IsValid: function(date) {
      return !isNaN(Date.parse(date))
        ? true
        : module.exports.Errors.setError(
            "Cannot read date of invalid : " + date
          ) + false;
    }
  };
  module.exports.Graphics2d = {
    CreateCanvas: function(
      parent = document.querySelector("body"),
      width = module.exports.window.innerWidth,
      height = module.exports.window.innerHeight
    ) {
      const ctxp = document.querySelector(parent);
      const crt = document.createElement("canvas");
      document.querySelector("body").style = atob(
        "b3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOw=="
      );
      crt.setAttribute("id", "canvas");
      ctxp.appendChild(crt);
      const canvas = document.querySelector("canvas");
      canvas.width = width;
      canvas.height = height;
      ctxp.style.width = width + "px";
      ctxp.style.height = height + "px";
      ctx = canvas.getContext("2d");
    },
    Loop: function(sketch, background) {
      requestAnimationFrame(sketch);
      ctx.clearRect(
        0,
        0,
        module.exports.window.innerWidth,
        module.exports.window.innerHeight
      );
      canvas.setAttribute("style", "background-color:" + background);
    },
    NoStroke: function() {
      ctx.lineWidth = 0;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.0)";
    },
    StrokeWeight: function(size) {
      ctx.lineWidth = size;
    },
    Fill: function(color) {
      ctx.fillStyle = color;
    },
    Ellipse: function(x, y, size) {
      ctx.beginPath();
      ctx.arc(x, y, size, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
    },
    Rectangle: function(x, y, w, h) {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.fill();
      ctx.stroke();
    },
    Text: function(txt, x, y) {
      ctx.beginPath();
      ctx.fillText(txt, x, y);
      ctx.fill();
    },
    TextStyle: function(font) {
      ctx.font = font;
    },
    Sprite: function(file, sx, sy, swidth, sheight, x, y, width, height) {
      ctx.drawImage(file, sx, sy, swidth, sheight, x, y, width, height);
    },
    Image: function(file, x, y, w, h) {
      ctx.drawImage(file, x, y, w, h);
    },
    Distance: function(fx, fy, sx, sy) {
      let x = sx - fx;
      let y = sy - fy;
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
  };
  module.exports.Logs = {
    Create: function(data, fileName) {
      let json = JSON.stringify(data);
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        let blob = new Blob([json], { type: "application/json" });
        window.navigator.msSaveOrOpenBlob(blob, fileName);
      } else {
        let file = new File([json], fileName, { type: "application/json" });
        let exportUrl = URL.createObjectURL(file);
        window.location.assign(exportUrl);
        URL.revokeObjectURL(exportUrl);
      }
    }
  };
  module.exports.Cookie = {
    Set: function(name, value, days) {
      // if (module.exports.Cookie.Exists(name)) {
      //     module.exports.Errors.setError("Cookie " + name + " is already set.");
      // } else {
      if (this.days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
      }
      return true;
      //}
    },
    Update: function(name, value, days) {
      if (!module.exports.Cookie.Exists(name)) {
        module.exports.Errors.setError(
          "Cannot read cookie " + name + " of undefined."
        );
      } else {
        if (this.days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          var expires = "; expires=" + date.toGMTString();
        } else {
          var expires = "";
          document.cookie = name + "=" + value + expires + "; path=/";
        }
        return true;
      }
    },
    Get: function(name) {
      if (!module.exports.Cookie.Exists(name)) {
        module.exports.Errors.setError(
          "Cannot read cookie " + name + " of undefined."
        );
      } else {
        var namex = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        var c_return = null;
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(namex) == 0) {
            c_return = c.substring(namex.length, c.length);
          }
          return c_return;
        }
      }
    },
    Remove: function(name) {
      if (!module.exports.Cookie.Exists(name)) {
        module.exports.Errors.setError(
          "Cannot read cookie " + name + " of undefined."
        );
      } else {
        module.exports.Cookie.Expire(name, "", -1);
        return "removed";
      }
    },
    Expire: function(name) {
      if (!module.exports.Cookie.Exists(name)) {
        exports.Errors.setError(
          "Cannot read cookie " + name + " of undefined."
        );
      } else {
        document.cookie =
          name +
          "=" +
          "" +
          ";expires=Thu, 01 Jan 1970 00:00:00 UTC" +
          "; path=/";
      }
    },
    Exists: function(name) {
      var namex = name + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      var c_return = false;
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(namex) == 0) {
          c_return = true;
        }
        return c_return;
      }
    }
  };
  module.exports.LocalStorage = {
    Set: function(name, value) {
      // if (localStorage.getItem(name)) {
      //     module.exports.Errors.setError("Local Storage " + name + " is already set.");
      // } else {
      localStorage.setItem(name, value);
      return true;
      //}
    },
    Update: function(name, value) {
      //if (!localStorage.getItem(name)) {
      //  module.exports.Errors.setError("Cannot read local storage " + name + " of undefined.");
      //} else {
      localStorage.setItem(name, value);
      return true;
      //}
    },
    Get: function(name) {
      // if (!localStorage.getItem(name)) {
      //     module.exports.Errors.setError("Cannot read local storage " + name + " of undefined.");
      // } else {
      return localStorage.getItem(name);
      //}
    },
    Remove: function(name) {
      if (!localStorage.getItem(name)) {
        module.exports.Errors.setError(
          "Cannot read local storage " + name + " of undefined."
        );
      } else {
        localStorage.removeItem(name);
        return true;
      }
    },
    Clear: function() {
      localStorage.clear();
      return "cleared";
    },
    Exists: function(name) {
      let exists = false;
      if (localStorage.getItem(name)) {
        exists = true;
      }
      return exists;
    }
  };
  module.exports.SessionStorage = {
    Set: function(name, value) {
      // if (sessionStorage.getItem(name)) {
      //     module.exports.Errors.setError("Session Storage " + name + " is already set.");
      // } else {
      sessionStorage.setItem(name, value);
      return true;
      //}
    },
    Update: function(name, value) {
      if (!sessionStorage.getItem(name)) {
        module.exports.Errors.setError(
          "Cannot read session storage " + name + " of undefined."
        );
      } else {
        sessionStorage.setItem(name, value);
        return true;
      }
    },
    Get: function(name) {
      // if (!sessionStorage.getItem(name)) {
      //   module.exports.Errors.setError(
      //     "Cannot read session storage " + name + " of undefined."
      //   );
      // } else {
        return sessionStorage.getItem(name);
      //}
    },
    Remove: function(name) {
      if (!sessionStorage.getItem(name)) {
        module.exports.Errors.setError(
          "Cannot read session storage " + name + " of undefined."
        );
      } else {
        sessionStorage.removeItem(name);
        return true;
      }
    },
    Clear: function() {
      sessionStorage.clear();
      return "cleared";
    },
    Exists: function(name) {
      let exists = false;
      if (sessionStorage.getItem(name)) {
        exists = true;
      }
      return exists;
    }
  };
  module.exports.UserAgent = {
    Geolocation: async function() {
      // to read include this .then(function(res){ console.log(res) })
      return await fetch("https://freegeoip.app/json/")
        .then(res => res.json())
        .then(function(res) {
          return res;
        })
        .catch(function(err) {
          module.exports.Errors.setError(
            "Satellite cannot response to your request !"
          );
        });
    },
    Url: {
      BaseUrl: function() {
        return new URL(module.exports.library.location.href).origin;
      },
      CurrentUrl: function() {
        return new URL(module.exports.library.location.href).href;
      },
      Parameter: function(name) {
        const url = new URL(module.exports.UserAgent.Url.CurrentUrl());
        const param = url.searchParams.get(name);
        return param;
      }
    },
    Device: {
      IsMobile: function() {
        let type = false;
        (function(a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            device = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return type;
      },
      IsMobileTablet: function() {
        let type = false;
        (function(a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            type = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return type;
      },
      IsTouchScreen: function() {
        return typeof window.ontouchstart !== "undefined";
      },
      Information: navigator,
      SystemPlatform: navigator.platform
    },
    Browser: {
      BeforeLeave: function() {
        window.addEventListener("beforeunload", function(e) {
          let confirmationMessage = "o/";
          (e || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        });
      },
      UsedBrowser: function() {
        // returns an array
        let ua = navigator.userAgent;
        let tem;
        let M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
          ) || [];
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return "IE " + (tem[1] || "");
        }
        if (M[1] === "Chrome") {
          tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
          if (tem != null)
            return tem
              .slice(1)
              .join(" ")
              .replace("OPR", "Opera")
              .replace("Edg ", "Edge ");
        }
        M = M[2]
          ? [M[1], M[2]]
          : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M;
      }
    }
  };
  module.exports.Debug = {
    On: function() {
      module.exports.Errors.isDebug(true);
    },
    Off: function() {
      module.exports.Errors.isDebug(false);
    },
    OnConsole: function() {
      module.exports.Errors.isDebug(false);
      console.warn(
        "OnConsole is called ! You can only see this error on console."
      );
      window.addEventListener("error", function(err) {
        console.error(new Error(err));
      });
    },
    OnAlert: function() {
      module.exports.Errors.isDebug(false);
      window.addEventListener("error", function(err) {
        confirm(
          "OnAlert is called ! You can only see this error on alert. \n" +
            err.message
        );
      });
    },
    inJSEmbed: function() {
      document.querySelector("html").setAttribute("class", "inJS-Embeded");
    }
  };
  module.exports.version = "1.0.0";
  module.exports.author = "Inson Concepcion";
  module.exports.Debug.inJSEmbed();
  module.exports.window = win || null;
  module.exports.library = lib || null;
  module.exports.Errors = {
    isDebug: function(e) {
      let o = "";
      return (
        e &&
          window.addEventListener("error", function(e) {
            new Promise((o, r) => {
              throw e;
            }).catch(function(r) {
              const t = new Error(r);
              let n = "";
              const a = document.querySelector("title");
              document.body.innerHTML = "";
              let s = document.createElement("link");
              (s.id = "warning-error"),
                (s.rel = "shortcut icon"),
                (s.size = "10 x 10"),
                (s.href =
                  "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_48-512.png"),
                document.head.appendChild(s),
                (document.body.style =
                  "margin: 0; width: 100vw; height: auto; padding: 1rem; position: fixed; font-family: 'Arial', sans-serif; background-color: rgb(107, 15, 24) !important; overflow: auto;"),
                (n +=
                  '\n\t\t\t\t\t\t<div style="width: 80%; z-index: 999999999 !important;">\n\t\t\t\t\t\t<h2 style="text-transform: none; color: #eae6e6; font-weight: 500;">Uncaught JavaScript TypeError:</h2>'),
                (n += `<p style="color: #eae6e6; margin: 10px;"><span>Error Name </span>: ${t.name}</p>`),
                (n += `<p style="color: #eae6e6; margin: 10px;"><span>Error Message </span>: ${e.message}</p>`),
                (n += `<p style="color: #eae6e6; margin: 10px;"><span>Error on line number: </span> ${window.location.href}:<span style="background-color: #f44336; color: #f9f9f9; padding: 1px 1px 1px .5px; border-radius: 5px; margin-left: 10px;">${e.lineno}</span></p>`),
                (n += `<p style="color: #eae6e6; margin: 10px;"><span>Error Object </span>: Uncaught ${t}</p>`),
                (n += `<p style="color: #eae6e6; margin: 10px;"><span>Current Url </span>: Error Found in <a style="color: #eae6e6;" href="${window.location.href}">${window.location.href}</a></p>`),
                (n +=
                  '<p style="color: #eae6e6; margin: 10px;"><span>Posible Search Solutions </span>: </p>'),
                (n += `<ol style="color: #eae6e6; margin: 10px;"><li><a style="color: #eae6e6;" href="https://www.google.com/search?q=${encodeURI(
                  `${e.message} javascript`
                )}" target="_blank">https://www.google.com/search?q=${encodeURI(
                  `${e.message} javascript`
                )}</a></li><li><a style="color: #eae6e6;" href="https://stackoverflow.com/search?q=${encodeURI(
                  `${e.message} javascript`
                )}" target="_blank">https://stackoverflow.com/search?q=${encodeURI(
                  `${e.message} javascript`
                )}</a></li></ol>`),
                (document.body.innerHTML = n),
                console.error(r),
                (o = e);
              let i = 0;
              setInterval(function() {
                ++i > 1
                  ? ((i = 0), (a.innerHTML = "Error found:"))
                  : (a.innerHTML = `${e.message.toLowerCase()}`);
              }, 1e3);
            });
          }),
        o
      );
    },
    isError: function(e) {
      let o = "";
      const r = new Error(e);
      let t = "";
      const n = document.querySelector("title");
      document.querySelector(".inJS-Embeded").style.cssText =
        "height: auto !important; background-color: red;";
      document.body.innerHTML = "";
      let a = document.createElement("link");
      (a.id = "warning-error"),
        (a.rel = "shortcut icon"),
        (a.size = "10 x 10"),
        (a.href =
          "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_48-512.png"),
        document.head.appendChild(a),
        (document.body.style =
          "margin: 0; width: 100vw; height: auto; padding: 1rem; position: fixed; font-family: 'Arial', sans-serif; background-color: rgb(107, 15, 24) !important; overflow: auto;"),
        (t +=
          '\n\t\t\t<div style="width: 80%; z-index: 999999999 !important;">\n\t\t\t<h2 style="text-transform: none; color: #eae6e6; font-weight: 500;">Uncaught JavaScript Error:</h2>'),
        (t += `<p style="color: #eae6e6; margin: 10px;"><span>Error Name </span>: ${r.name}</p>`),
        (t += `<p style="color: #eae6e6; margin: 10px;"><span>Error Message </span>: ${e.message}</p>`),
        (t += `<p style="color: #eae6e6; margin: 10px;"><span>Error details: </span><span style="background-color: #f44336; color: #f9f9f9; padding: 1px 1px 1px .5px; border-radius: 5px; margin-left: 10px;">${
          new Error(e).stack
        }</span></p>`),
        (t += `<p style="color: #eae6e6; margin: 10px;"><span>Error Object </span>: Uncaught ${r}</p>`),
        (t += `<p style="color: #eae6e6; margin: 10px;"><span>Current Url </span>: Error Found in <a style="color: #eae6e6;" href="${window.location.href}">${window.location.href}</a></p>`),
        (t +=
          '<p style="color: #eae6e6; margin: 10px;"><span>Posible Search Solutions </span>: </p>'),
        (t += `<ol style="color: #eae6e6; margin: 10px;"><li><a style="color: #eae6e6;" href="https://www.google.com/search?q=${encodeURI(
          `${e.message} javascript`
        )}" target="_blank">https://www.google.com/search?q=${encodeURI(
          `${e.message} javascript`
        )}</a></li><li><a style="color: #eae6e6;" href="https://stackoverflow.com/search?q=${encodeURI(
          `${e.message} javascript`
        )}" target="_blank">https://stackoverflow.com/search?q=${encodeURI(
          `${e.message} javascript`
        )}</a></li></ol>`),
        (document.body.innerHTML = t),
        (o = e);
      let s = 0;
      return (
        setInterval(function() {
          ++s > 1
            ? ((s = 0), (n.innerHTML = "Error found:"))
            : (n.innerHTML = `${e.message.toLowerCase()}`);
        }, 1e3),
        o
      );
    },
    setError: function(e) {
      return (
        console.log(new Error(e)), module.exports.Errors.isError(new Error(e))
      );
    }
  };
  typeof window.inJS === "undefined"
    ? (window.inJS = typeof module === "object" ? module.exports : false)
    : false;
});
