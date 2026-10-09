# Monster Code Test Case

A tiny, intentionally imperfect public repository for testing Monster Code.

## How to use
1. Create a new **public** GitHub repository named `monster-code-test-case`.
2. Extract this ZIP on your computer.
3. Upload the *contents* of the extracted folder to the repository root, not the ZIP file itself.
4. Open https://todo-slayer.vercel.app, paste the repository URL, and scan.
5. To test a real kill, fix or remove one finding, commit the change to GitHub, and rescan.

## Intended findings
- `src/payments.py`: TODO, FIXME, unimplemented function
- `src/profile.js`: FIXME, placeholder/mock-data wording, HACK
- `src/sync.py`: swallowed exception and stub
- `src/legacy.js`: XXX marker
- `src/strings.js`: TODO/FIXME inside ordinary strings, to test false-positive resistance

These are deliberately unfinished examples. Do not use them in production code.
