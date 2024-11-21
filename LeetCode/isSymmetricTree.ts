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

function isSymmetric(root: TreeNode | null): boolean {
  const queueL: Array<TreeNode | null> = [];
  const queueR: Array<TreeNode | null> = [];

  queueL.push(root?.left ?? null);
  queueR.push(root?.right ?? null);

  while (queueL.length > 0 || queueR.length > 0) {
    const nodeL = queueL.shift();
    const nodeR = queueR.shift();

    if (nodeL?.val !== nodeR?.val) return false;

    nodeL?.left && queueL.push(nodeL.left);
    nodeL?.right && queueL.push(nodeL.right);

    nodeR?.right && queueR.push(nodeR.right);
    nodeR?.left && queueR.push(nodeR.left);
  }

  return true;
}

// [1,2,2,3,4,4,3] => true
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(root1));

// [1,2,2,null,3,null,3] => false
const root2 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root2));
