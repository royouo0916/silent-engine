import { BaseAgent } from './BaseAgent.js';

export class Tactician extends BaseAgent {
  constructor(memoryClient) {
    super('The Tactician', 'Gamification Officer', memoryClient);
  }

  async process(taskData) {
    this.log(`Evaluating rewards for tasks`);
    // Logic to update TFT-style game state
    const rewards = {
      points: 10,
      newUnits: ['Scholar']
    };
    const currentRewards = this.memoryClient.read('rewards');
    this.memoryClient.write('rewards', {
      ...currentRewards,
      points: currentRewards.points + rewards.points
    });
    return rewards;
  }
}
