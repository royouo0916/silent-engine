export class MemoryClient {
  constructor(sharedMemory) {
    this.memory = sharedMemory;
  }

  read(key) {
    return this.memory.getState()[key];
  }

  write(key, value) {
    this.memory.update(key, value);
  }

  getAllState() {
    return this.memory.getState();
  }
}
