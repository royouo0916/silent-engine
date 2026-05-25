export class BaseAgent {
  constructor(name, role, memoryClient) {
    this.name = name;
    this.role = role;
    this.memoryClient = memoryClient;
  }

  async process(input) {
    throw new Error('Process method must be implemented by specialist agents');
  }

  log(message) {
    console.log(`[${this.name} (${this.role})]: ${message}`);
  }
}
