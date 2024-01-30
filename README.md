# bun-repro-2

To install dependencies:

```bash
bun install
```

To run:

```bash
╰─ bun run index.ts
✔ Do you want to continue? (y/N) · true
answer {
  answer: true,
}
error running GetFunctionCommand
? Do you want to continue? (y/n) › false #Stuck here
```


Works fine with ts-node:

```bash
╰─ ts-node-esm index.ts
✔ Do you want to continue? (y/N) · true
answer { answer: true }
error running GetFunctionCommand
✔ Do you want to continue? (y/N) · true
answer { answer: true }
```
