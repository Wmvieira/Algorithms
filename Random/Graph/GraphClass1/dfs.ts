import { Node } from "./Node";

function dfs(startNode: Node) {
  const visited: Set<Node> = new Set();
  const stack: Node[] = [];

  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (!visited.has(currentNode)) {
      console.log(currentNode.value);
      visited.add(currentNode);

      for (const neighbor of currentNode.neighbors) {
        stack.push(neighbor);
      }
    }
  }
}
