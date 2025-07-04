import TodoList from './todo-list/page';

export default function Home() {
  return <TodoList />;
}

const sleepMs = (n) => new Promise((resolve) => setTimeout(resolve, n));

// function runSecuence(arr) {
//   let count = arr.length;
//   const result = new Array(count);
//   return new Promise((resolve) => {
//     arr.forEach((item, i) => {
//       item.then((val) => {
//         result[i] = val;
//         if (--count == 0) {
//           resolve(result);
//         }
//       });
//     });
//   });
// }

function maxEvenSubsetSum(arr) {
  const nums = arr.filter((n) => n > 0 && Number.isInteger(n));

  const totalSum = nums.reduce((sum, n) => sum + n, 0);

  if (totalSum % 2 === 0) {
    return {
      sum: totalSum,
      subset: nums,
    };
  }
  const oddNumbers = nums.filter((n) => n % 2 === 1);

  if (oddNumbers.length === 0) {
    return {
      sum: 0,
      subset: [],
    };
  }

  const smallestOdd = Math.min(...oddNumbers);
  const newSubset = nums.filter((n) => n !== smallestOdd || (n === smallestOdd && ((smallestOddUsed = false), true) && (smallestOddUsed = true)));
  const evenSum = totalSum - smallestOdd;

  return {
    sum: evenSum,
    subset: newSubset,
  };
}
