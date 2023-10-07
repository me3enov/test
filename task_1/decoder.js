export const decodeObjects = (arr, dict) => {
  return arr.reduce((acc, item) => {
    const {decodedItem, ids} = Object.entries(item).reduceRight((acc, [key, value]) => {
      acc.ids.add(value);
      acc.decodedItem[key] = key.endsWith('Id') && key !== 'groupId' && dict[value] ? dict[value] : value;
      return acc;
    }, {decodedItem: {}, ids: new Set()});

    acc.decoded.push(decodedItem);
    acc.uniqueIds = new Set([...acc.uniqueIds, ...ids]);
    return acc;
  }, {decoded: [], uniqueIds: new Set()});
};
