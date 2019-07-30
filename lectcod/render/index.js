// {{name}} {{age}}
function render(tpl, data) {
  // 1.找到所有的{{}} regExp /{\{\(.+)\}\}/ /g
  return tpl.replace(/\{\{(.+?)\}\}/g, function($1, $2) {
    console.log($1, $2);
  })
}
let tmp = `
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
`
render(tmp, {name: '许', age: 18});