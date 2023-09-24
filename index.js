import _ from 'lodash'
export default function solution(content){
    //1
const rows = content.split('\n');
  const data = rows.slice(1).map((row) => 
  row.split(' ').slice(0, 33).map(el => el.trim())
)
 //console.log(data)
console.log(`Count: ${data.length}`); 
 //2 
 const  castles = data.map((row) => `${row[1][0].toUpperCase()}${row[1].slice(1).toLowerCase()}`)
 const lowerCastles = _.union(castles)
 const sortCastles = lowerCastles.sort()
 //console.log(sortCastles)
console.log(`Castles: ${sortCastles.join(', ')}`)
//3
const creatures = data.map((data) => data[2])
const healths = data.map((data) => Number(data[4]))
const largestHealthIndex = healths.indexOf(Math.max(...healths));
console.log(largestHealthIndex)
console.log(`Largest hp: ${creatures[largestHealthIndex]}`)
//console.log(creatures)
}