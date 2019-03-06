var reset = document.getElementsByClassName('reset')
    viewer = document.getElementsByClassName('viewer'),
    equals = document.getElementsByClassName('equals'),
    num = document.getElementsByClassName('num'),
    ops = document.getElementsByClassName('ops'),
    theNum = '',
    oldNum = '',
    resultNum,
    operator,
    clear = document.getElementById('clear');

var setNum = function() {
  if (resultNum)
    {theNum = this.getAttribute('data-num')
    resultNum = ''}
  else
    {theNum += this.getAttribute('data-num')}

  viewer.innerHTML = theNum
}
var moveNum = function() {
  oldNum = theNum
  theNum = ''
  operator = this.getAttribute('data-ops')

  equals.setAttribute('data-result', '')
}
var displayNum = function() {
  oldNum = parseFloat(oldNum)
  theNum = parseFloat(theNum)

  switch (operator) {
    case 'add':
      resultNum = oldNum + theNum
      break;

    case 'subtract':
      resultNum = oldNum - theNum
      break;

    case 'multiply':
      resultNum = oldNum * theNum
      break;

    case 'divide':
      resultNum = oldNum / theNum
      break;

    case 'percent':
      resultNum = oldNum / 100
      break;

    default:
      resultNum = theNum
  }
  viewer.innerHTML = resultNum
   equals.setAttribute('data-result', resultNum)
}


reset.addEventListener('click', function() {
  location.reload()
})
num.addEventListener('click', function() {
  for(var i = 0; i < num.length; i++) {
    num[i] = setNum
  }
})
ops.addEventListener('click', function() {
  for(var i = 0; i < ops.length; i++) {
    ops[i] = moveNum
  }
})
equals.addEventListener('click', function() {
  equals = displayNum
})
