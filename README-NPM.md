## AssertionLogic

This Library is used to write the logic of Assertion.

### Example

1. Set Up Your Main Project
2. Install the Library
```shell
npm i assertionlogic
```
3. Use the Library in Your Contract
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "assertionLogic/src/AssertionLogic.sol";

contract MainContract {
    using AssertionLogic for AssertionLogic.CompositeCondition;
    AssertionLogic.CompositeCondition public compositeCondition;

    function build(uint256 a, uint256 b) public returns (string memory) {
        compositeCondition.andOp("$has_web2_account", AssertionLogic.Operator.Equal, "true");
        compositeCondition.andOp("$has_web3_account", AssertionLogic.Operator.Equal, "true");

        return compositeCondition.toString();
    }
}
```

```json
{
    "and": [
        {
            "src": "$has_web2_account",
            "op": "==",
            "dst": "true"
        },
        {
            "src": "$has_web3_account",
            "op": "==",
            "dst": "true"
        }
    ]
}
```