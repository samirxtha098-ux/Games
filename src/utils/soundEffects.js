
class SoundManager {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    this.masterGain.gain.value = 0.3; // Volume
  }

  playTone(freq, type, duration, startTime = 0) {
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.context.currentTime + startTime);
    
    gain.gain.setValueAtTime(1, this.context.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + startTime + duration);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start(this.context.currentTime + startTime);
    osc.stop(this.context.currentTime + startTime + duration);
  }

  playCardFlip() {
    this.playTone(400, 'sine', 0.1);
    this.playTone(600, 'triangle', 0.05, 0.05);
  }

  playDraw() {
    this.playTone(300, 'sine', 0.1);
    this.playTone(350, 'sine', 0.1, 0.05);
  }

  playUno() {
    this.playTone(500, 'square', 0.1);
    this.playTone(800, 'square', 0.1, 0.1);
    this.playTone(1200, 'square', 0.3, 0.2);
  }

  playWin() {
    [440, 554, 659, 880].forEach((freq, i) => {
      this.playTone(freq, 'triangle', 0.3, i * 0.15);
    });
  }

  playError() {
    this.playTone(150, 'sawtooth', 0.2);
    this.playTone(100, 'sawtooth', 0.2, 0.1);
  }
}

export const soundManager = new SoundManager();
