class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  const queueP: Array<TreeNode | null> = [];
  const queueQ: Array<TreeNode | null> = [];

  queueP.push(p);
  queueQ.push(q);

  while (queueP.length > 0 || queueQ.length > 0) {
    const currentNodeP = queueP.shift();
    const currentNodeQ = queueQ.shift();

    if (currentNodeP?.val !== currentNodeQ?.val) return false;

    if (
      currentNodeP &&
      (currentNodeP.left !== null || currentNodeP.right !== null)
    ) {
      queueP.push(currentNodeP.left);
      queueP.push(currentNodeP.right);
    }

    if (
      currentNodeQ &&
      (currentNodeQ.left !== null || currentNodeQ.right !== null)
    ) {
      queueQ.push(currentNodeQ.left);
      queueQ.push(currentNodeQ.right);
    }
  }

  return true;
}

//case 1 p = [1,2,3], q = [1,2,3] => true
const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(1, isSameTree(p1, q1), true);

//case 2 p = [1,2], q = [1,null,2] => false
const p2 = new TreeNode(1, new TreeNode(2));
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(2, isSameTree(p2, q2), false);

//case 3 p = [1,2,1], q = [1,1,2] => false
const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(3, isSameTree(p3, q3), false);

//case 4 p = [], q = [] => true
const p4 = null;
const q4 = null;
console.log(4, isSameTree(p4, q4), true);

//case 5 p = [1], q = [1] => true
const p5 = new TreeNode(1);
const q5 = new TreeNode(1);
console.log(5, isSameTree(p5, q5), true);

//case 6 p = [1], q = [2] => false
const p6 = new TreeNode(1);
const q6 = new TreeNode(2);
console.log(6, isSameTree(p6, q6), false);

//case 7 p = [1,2,3,4,5], q = [1,2,3,4,5] => true
const p7 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
const q7 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(7, isSameTree(p7, q7), true);

//case 8 p = [1,2,3,4], q = [1,2,3,null,4] => false
const p8 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
const q8 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(4)),
  new TreeNode(3)
);
console.log(8, isSameTree(p8, q8), false);

// case 9 p = [1,0], q = [1,null,0] => false
const p9 = new TreeNode(1, new TreeNode(0));
const q9 = new TreeNode(1, null, new TreeNode(0));
console.log(9, isSameTree(p9, q9), false);
