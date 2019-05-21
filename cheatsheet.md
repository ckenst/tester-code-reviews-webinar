# Participating in Code Reviews as a Tester: A Cheat Sheet

## Code agnostic Questions

- What files have changed? Take a an mental inventory
  - Are there extra files you weren’t intending to see? Less files? Do these changes belong here?
- How many individual changes? Big risk, small risk?
- Are things readable? Do names reflect the things they are supposed to represent?
- Are there any text changes (copy or documentation changes)?
- Are there any code comments you can find? Do they say scary things?
- Is there a link to a story/ticket for review?

## Code aware Questions

- Does this code write debugging information to a log file somewhere? (PrintLn or console.log)
- Does this code use any third-party services? Which ones? (Do we have access to this service for testing?)
- Are there any potential security problems with the code?
- Are there any obvious logic errors?
- How was this code written? What design patterns and conventions are being used?
- Are there any tests with this code? What do those tests do?
