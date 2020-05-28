import css from './css/style.css';
import { module } from './myModule';

var index = 0;
function renderOutput (ele, data) {
  index++;
  if (data) {
    console.log(index + ' : ' + data);
    ele.style.color = 'green';
    ele.innerHTML = '(Support)';
  } else {
    ele.style.color = 'red';
    ele.innerHTML = '(Not Support)';
  }
}

window.onload = function () {
  // 1. Arrow function
  var es6_arrowFunc = document.getElementById('es6_arrowFunc');
  if (es6_arrowFunc) {
    const demoArrowFunc = () => 'Arrow Function';
    // output
    renderOutput(es6_arrowFunc, demoArrowFunc());
  }

  // Class
  var es6_class = document.getElementById('es6_class');
  if (es6_class) {
    class DemoClass {
      start () {
        return 'Class';
      }
    }
    // output
    renderOutput(es6_class, new DemoClass().start());
  }

   
  // 3. Template string
  var es6_ts = document.getElementById('es6_ts');
  if (es6_ts) {
    const ts = 'template string';
    // output
    renderOutput(es6_ts, `${ts}`);
  }

  // 4. Destructuring
  var es6_destructing = document.getElementById('es6_destructing');
  if (es6_destructing) {
    const ob = () => ({ a: 'Destructing' });
    const { a } = ob();
    // output
    renderOutput(es6_destructing, a);
  }

  // 5. Default + Rest + Spread
  var es6_spread = document.getElementById('es6_spread');
  if (es6_spread) {
    const foo = ({ a }) => {
      return a;
    }
    // output
    renderOutput(es6_spread, foo({ a: 'Spread' }));
  }

  // 5. Let + Const
  var es6_const = document.getElementById('es6_const');
  if (es6_const) {
    let l = 'L';
    const c = 'Const';
    {
      l += 'et';
    }
    // output
    renderOutput(es6_const, `${l}${c}`);
  }

  // 6. Modules
  var es6_modules = document.getElementById('es6_modules');
  if (es6_modules) {
    // output
    renderOutput(es6_modules, module);
  }

  // 7. Map + Set
  var es6_mapset = document.getElementById('es6_mapset');
  if (es6_mapset) {
    // output
    var s = new Set();
    s.add('Set');
    renderOutput(es6_mapset, s.values());
  }

  // 8. Symbol
  var es6_symbol = document.getElementById('es6_symbol');
  if (es6_symbol) {
    // output
    var key = Symbol('key');
    var ob = {};
    ob[key] = '>>>Symbol Value<<<<';
    renderOutput(es6_symbol, ob[key]);
  }


  // 9. Promise
  var es6_promise = document.getElementById('es6_promise');
  if (es6_promise) {
    // output
    function foo_promise () {
      var condi = true;
      return new Promise((resolve, reject) => {
        if (condi) {
          resolve(condi);
        } else {
          reject(condi);
        }
      })
    }

    foo_promise()
      .then(res => renderOutput(es6_promise, res))
      .catch(err => renderOutput(es6_promise, err))
  }
}