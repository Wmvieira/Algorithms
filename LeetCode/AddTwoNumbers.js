/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let curL1Node = l1;
  let curL2Node = l2;
  let result = null;
  let curResult = null;

  while (true) {
    let sum = carry;
    carry = 0;

    if (curL1Node && curL2Node) {
      sum += curL1Node.val + curL2Node.val;
    } else if (curL1Node && !curL2Node) {
      sum += curL1Node.val;
    } else if (!curL1Node && curL2Node) {
      sum += curL2Node.val;
    } else {
      if (sum) {
        curResult.next = new ListNode(1, null);
      }

      return result;
    }

    if (sum > 9) {
      carry = 1;
      sum %= 10;
    }

    if (!result) {
      result = new ListNode(sum, null);
      curResult = result;
    } else {
      curResult.next = new ListNode(sum, null);
      curResult = curResult.next;
    }

    if (curL1Node) curL1Node = curL1Node.next;
    if (curL2Node) curL2Node = curL2Node.next;
  }
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

addTwoNumbers(l1, l2);
