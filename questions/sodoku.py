def solve(board):
  def solver(board):
      def getCandidates(x, y):
        spots = [True]*9
        for k in range(9):
          if board[x][k]!=0:
            spots[board[x][k]-1]=False
        
        for k in range(9):
          if board[k][y]!=0:
            spots[board[k][y]-1]=False
        
        for i in range(int(x/3)*3, int(x/3)*3+3):
          for j in range(int(y/3)*3, int(y/3)*3+3):
            if board[i][j]!=0:
              spots[board[i][j]-1]=False
        
        return [idx+1 for idx, bol in enumerate(spots) if bol==True]
      
      shortest = 9
      best = None 
      bestPos = None
      for i in range(9):
        for j in range(9):
          if board[i][j] == 0:
            candidates = getCandidates(i, j)
            if len(candidates) < shortest:
              shortest = len(candidates)
              best = candidates
              bestPos = (i, j)
              
      if best is None:
        return True
      
      i, j = bestPos
      for candidate in best:
        board[i][j] = candidate
        if solver(board) == True:
          return True
      board[i][j] = 0
    
      return False
      
  solver(board)
  return board
  
""""""  
from copy import deepcopy

def possibles(board, x, y):
    row, col, square = set(), set(), set()
    for k in range(9):
        if board[x][k]!=0:
            if board[x][k] in row: 
                raise Exception('duplicates!')
            else:
                row.add(board[x][k])
                
    for k in range(9):
        if board[k][y]!=0:
            if board[k][y] in col: 
                raise Exception('duplicates!')
            else:
                col.add(board[k][y])
    
    a, b = 3*(x//3), 3*(y//3)
    for i in range(a, a+3):
        for j in range(b, b+3):
            if board[i][j]!=0:
                if board[i][j] in square:
                    raise Exception('duplicates!')
                else:
                    square.add(board[i][j])

    return  set(range(1, 10)) - (row | col | square)


def solver(board, solution):
    shortest, best, bestPos = 9, None, None
    # start with open cells with least possibilities
    for i in range(9):
        for j in range(9):
            if board[i][j] < 0 or board[i][j] >9:
                raise Exception('value out of range')
            elif board[i][j] != 0:
                continue
            P = possibles(board, i, j)
            if len(P) < shortest:
                shortest, best, bestPos = len(P), P, (i, j)
            if shortest==1:
                break
                
    if best is None:
        if board not in solution:
            solution.append(deepcopy(board))
        return True
      
    i, j = bestPos
    solvable = False
    for candidate in best:
        board[i][j] = candidate
        if solver(board, solution):
            solvable = True
        board[i][j] = 0 
    
    return solvable


def sudoku_solver(board):
    N, M = len(board), len(board[0])
    if N!=9 or M!=9:
        raise Exception('wrong size')
        
    solution = []
    solver(board, solution)
    
    if not solution:
        raise Exception('not solvable')
    elif len(solution)>1:
        raise Exception('too many solution')
        
    return solution[0]