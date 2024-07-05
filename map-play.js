const map = new Map();
const set = new Set();

// get value by index
// 1,2를 꺼내오자

function getByIndex(map, x,y) {
  if (!map.has(x)) {
    map.set(
      x, new Map([[y, 1]])
    )
  } else if (!map.get(x).has(y)) {
    inner_map = map.get(x)
    inner_map.set(
      y, 1
    )
  } else {
    var v = map.get(x).get(y)
    map.get(x).set(y, v+1)
  }
  return map.get(x).get(y)
}

const i_arr = [
  [1,2],
  [1,2],
  [2,2],
  [2,2]
]

for (var i_pair in i_arr) {
  console.log(getByIndex(map, i_pair[0], i_pair[1]))
  console.log(map)
}
