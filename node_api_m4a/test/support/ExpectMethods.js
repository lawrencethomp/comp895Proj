
var expect = require('expect');

const check200 =  (requestStatus) => {
    return expect(requestStatus).toBe(200);
};

const checkError = (error, bool) => {
    return expect(error).toBe(bool);
};

const isObject = (entity) => {
    return expect(typeof entity).toBe('object');
} 

const checkPageLength = (page, pageLength) => {
    return expect(page).toBe(pageLength);
}

const isNot = (entityOne, entityTwo) => {
    return expect(entityOne).not.toBe(entityTwo);
}

const checkString = (string1, string2) => {
    return expect(string1).toBe(string2);
}

const check500 = (response) => {
    expect(response.status).toBe(500);
}; 

const check404 = (response) => {
    expect(response.status).toBe(404);
};

const isEqual = ( entityOne, entityTwo) => {
    expect(entityOne).toEqual(entityTwo);
};

module.exports = {
    check200,
    checkError,
    isObject,
    checkPageLength,
    isNot,
    checkString,
    check500,
    check404,
    isEqual

}