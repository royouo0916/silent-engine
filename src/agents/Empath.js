import { BaseAgent } from './BaseAgent.js';

export class Empath extends BaseAgent {
  constructor(memoryClient) {
    super('The Empath', 'State Monitor', memoryClient);
  }

  async process(input) {
    this.log(`Monitoring state for: ${input}`);
    // Logic to detect anxiety and prompt user
    const stateUpdate = {
      anxietyLevel: 5,
      prompt: "你現在感覺卡卡的嗎？"
    };
    this.memoryClient.write('anxietyLevel', stateUpdate.anxietyLevel);
    return stateUpdate;
  }
}
