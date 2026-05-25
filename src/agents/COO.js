import { BaseAgent } from './BaseAgent.js';

export class COO extends BaseAgent {
  constructor(memoryClient) {
    super('COO', 'Orchestrator', memoryClient);
    this.specialists = {};
  }

  registerSpecialists(specialists) {
    this.specialists = specialists;
  }

  async handleInput(userInput) {
    this.log(`Received user input: ${userInput}`);
    // Phase 1: Peer Mode - Analyze sentiment/anxiety via Empath
    const empathResponse = await this.specialists.empath.process(userInput);
    
    // Phase 2: Architect Mode - Translate to tasks via Slicer
    const slicerResponse = await this.specialists.slicer.process(userInput);
    
    // Phase 3: Builder Mode - Update game state via Tactician
    const tacticianResponse = await this.specialists.tactician.process(slicerResponse);

    return {
      empath: empathResponse,
      tasks: slicerResponse,
      gameUpdate: tacticianResponse
    };
  }
}
