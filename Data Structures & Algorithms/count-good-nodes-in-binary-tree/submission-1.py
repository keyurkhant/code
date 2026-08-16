# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(tree, maxValue):

            if not tree:
                return 0

            res = 1 if tree.val >= maxValue else 0
            maxValue = max(maxValue, tree.val)
            res += dfs(tree.left, maxValue)
            res += dfs(tree.right, maxValue)

            return res

        return dfs(root, root.val)
        