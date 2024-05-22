const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.join(__dirname, 'src', 'AssertionLogic.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'AssertionLogic.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode.object'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const artifactPath = path.join(__dirname, 'artifacts');

if (!fs.existsSync(artifactPath)) {
    fs.mkdirSync(artifactPath);
}

for (const contractName in output.contracts['AssertionLogic.sol']) {
    const contract = output.contracts['AssertionLogic.sol'][contractName];
    const artifact = {
        abi: contract.abi,
        bytecode: contract.evm.bytecode.object,
    };

    fs.writeFileSync(
        path.join(artifactPath, `${contractName}.json`),
        JSON.stringify(artifact, null, 2),
        'utf8'
    );
}

console.log('Contracts compiled successfully');
