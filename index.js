const path = require('path');
const fs = require('fs');

const AssertionLogic = {
    abi: JSON.parse(fs.readFileSync(path.join(__dirname, 'artifacts', 'AssertionLogic.json'), 'utf8')).abi,
    bytecode: JSON.parse(fs.readFileSync(path.join(__dirname, 'artifacts', 'AssertionLogic.json'), 'utf8')).bytecode
};

module.exports = {
    AssertionLogic
};
