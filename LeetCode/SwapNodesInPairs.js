function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let curNode = head;
  
  while (curNode.next) {

    let aux = curNode.next;
    curNode = curNode.next

  }

};

swapPairs(
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
);
