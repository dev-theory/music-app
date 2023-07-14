## Music App

Build a search engine which will return any tracks, albums or artists partially matching the given keywords. The search terms can be found in any part of the track name, album title or artist name. For example given the search keyword "pre" the following results should be matched:

1. Artist "Pretty Lights"
2. Track "Sunset (Bird of Prey)"
3. Track "Press Pause"

Use the `tracks.json` file included in this repo as an example data input to search.

### To Test

Run the following command to search for a keyword "pre":

```
> yarn search pre
```

If your implementation is correct it should display the following output:

```js
[
  {
    id: "e66ce4cd-e531-497c-81ae-022ea421d754",
    no: 3,
    title: "Sunset (Bird of Prey)",
  },
  {
    id: "bb0b8194-5932-459f-a1c8-874fa27d8302",
    no: 2,
    title: "Press Pause",
  },
  {
    id: "c209193f-5f54-4133-a84f-6cf7cf8bea46",
    artist: "Pretty Lights",
    albums: [[Object]],
  },
];
```

In the above output all three matching results contain the keyword "pre":

1. the track title has the word "Prey"
2. the track title has the word "Press"
3. the artist name has the word "Pretty"
