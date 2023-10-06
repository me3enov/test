export function decodeFields(encoded, translations) {
    const excludedKeys = new Set(['groupId', 'service', 'formatSize', 'ca']);
    const uniqueIds = new Set();

    const decoded = encoded.map(item => {
        return Object.entries(item).reduce((acc, [key, value]) => {
            if (key.endsWith('id') && !excludedKeys.has(key) && value !== null) {
                if (translations[value]) {
                    uniqueIds.add(value);
                }
                acc[key] = translations[value] || value;
            } else {
                acc[key] = value;
            }
            return acc;
        }, {});
    });

    return { decoded, uniqueIds: Array.from(uniqueIds) };
}
