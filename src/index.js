function renderOutput (ele, data) {
  if (data) {
    ele.style.color = 'green';
    ele.innerHTML = data;
  } else {
    ele.style.color = 'red';
    ele.innerHTML = '(Not Support)';
  }
}

window.onload = function () {
  // 1. Arrow function
  var es6_arrowFunc = document.getElementById('es6_arrowFunc');
  if (es6_arrowFunc) {
    const demoArrowFunc = () => 'Support (Arrow Function)';
    // output
    renderOutput(es6_arrowFunc, demoArrowFunc());
  }

  // Class
  var es6_class = document.getElementById('es6_class');
  if (es6_class) {
    class DemoClass {
      start () {
        return 'Support (Class)'
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
    renderOutput(es6_ts, `This is ${ts} (Support)`);
  }

  // 4. Destructuring
  var es6_destructing = document.getElementById('es6_destructing');
  if (es6_destructing) {
    const ob = { a: 'a', b: 'b', c: 'c' };
    const { a } = ob;
    // output
    renderOutput(es6_destructing, a + '(Support)');
  }

  // 5. Default + Rest + Spread
}