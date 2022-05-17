export type TypingScrambleInfo = {
  from: string;
  to: string;
  start: number;
  end: number;
  emphasis: boolean;
  char?: string;
};

export type TypingStringInfo = { text: string; code?: number };

export class TextScramble {
  el: HTMLElement;
  chars: string;
  emClassName: string;
  weakClassName: string;
  queue: TypingScrambleInfo[];
  frame: number;
  resolve?: (value: unknown) => void;
  frameRequest?: number;

  constructor({
    el,
    chars = "!<>-_\\/[]{}—=+*^?#___abcdefghijklmnopqrstuvwxyz",
    emClassName = "text-bold",
    weakClassName = "opacity-20",
  }: {
    el: HTMLElement;
    chars?: string;
    emClassName?: string;
    weakClassName?: string;
  }) {
    this.el = el;
    this.chars = chars;
    this.emClassName = emClassName;
    this.weakClassName = weakClassName;
    this.update = this.update.bind(this);
    this.queue = [];
    this.frame = 0;
  }
  setText({ text, code = 0 }: TypingStringInfo): Promise<unknown> {
    const oldText: string = this.el.innerText;
    const length: number = Math.max(oldText.length, text.length);
    const promise: Promise<unknown> = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from: string = oldText[i] || "";
      const to: string = text[i] || "";
      const start: number = Math.floor(Math.random() * 40);
      const end: number = start + Math.floor(Math.random() * 60);
      const emphasis: boolean = ((2 ** (text.length - i - 1)) & code) > 0;
      this.queue.push({ from, to, start, end, emphasis });
    }

    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();
    return promise;
  }

  update(): void {
    let output: string = "";
    let complete: number = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end, emphasis } = this.queue[i];
      let { char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += emphasis ? `<span class="${this.emClassName}">${to}</span>` : to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="${this.weakClassName}">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve!(null);
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
