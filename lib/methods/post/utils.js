export function jsonParams(data) {
    return {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    };
}
//# sourceMappingURL=utils.js.map