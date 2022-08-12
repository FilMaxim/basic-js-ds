const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  //удаляем элеметы K кроме последнего
  const removeK = (list, k) => {
    if (list) {
      if (list.value === k && list.next !== null) {
        list.value = list.next.value;
        list.next = list.next.next;
        removeK(list, k);
      }
      removeK(list.next, k);
      return list;
    }
  };
  //удаляем элеметы K последний
  const removeLaslL = (list, k) => {
    if (list) {
      if (list.next === null) {
        return list;
      }
      if (list.next.value === k && list.next.next === null) {
        list.next = null;
        console.log(12);
        return list;
      }

      removeLaslL(list.next, k);
      console.log(list);
      return list;
    }
  }
  const a = removeK(l, k);
  const b = removeLaslL(a, k);
  return b;
}

module.exports = {
  removeKFromList,
};
