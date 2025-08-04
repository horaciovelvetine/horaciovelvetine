import type { ManagedWindow } from '../site/managed-window';
import type { SolvedokuGameState } from './solvedoku-game-state';

export interface SolvedokuWindowState extends ManagedWindow, SolvedokuGameState {
  /**
   * Interface that extends both ManagedWindow and SolvedokuGameState to create a window
   * that contains and manages a Solvedoku game instance.
   * 
   * Combines window management capabilities from ManagedWindow with
   * game state and logic from SolvedokuGameState.
   */
}
