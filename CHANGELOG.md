v0.1.1
------
- Export `g2d()` helper function that can help adoption to new-style APIs by
  converting old-style decoders (now called guards) to new-style decoders.


v0.1.0
------
- **Breaking change** New API: simplified names, split up decoders from guards.
  What used to be called "decoders" in 0.0.x ("things that either return
  a value or throw a runtime error") are now called "guards" in 0.1.0.
  The meaning of the term "decoders" is now changed to a thing that either is
  an "Ok" value or an "Err" value.

  To convert to the new API, do this:

  ```javascript
  // Old way
  import { decodeNumber, decodeObject, decodeString } from 'decoders';

  const decoder = decodeObject({
      name: decodeString(),
      age: decodeNumber(),
  });

  // -------------------------------------------------------------------

  // New way
  import { guard, number, object, string } from 'decoders';

  const guard = guard(object({
      name: string,
      age: number,
  }));
  ```

