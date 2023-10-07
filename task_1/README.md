# Data Decoder

A modern utility function built to decode data objects using a provided translation dictionary, while retaining the original data structure.

## Overview

The `decodeObjects` function has been designed to:
- Decode object fields with an `id` suffix using a given `translations` dictionary.
- Maintain the data structure in the form of a list of objects with the same keys.
- Exclude specific fields (`groupId`, `service`, `formatSize`, and `ca`) from decoding and retain their original values.
- Provide a list of unique `id`s from the encoded data.

## Functionality
The function employs modern JavaScript capabilities like reduce, Set, and other ES6+ features to ensure efficient and concise operations. Given its dynamic nature, it's adaptable to various data shapes and sizes.

I hope this meets your requirements! 
