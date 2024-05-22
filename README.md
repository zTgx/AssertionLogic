## AssertionLogic

This Library is used to write the logic of Assertion.

### Example

1. Set Up Your Main Project

If you don't already have a Forge project, create one:
```shell
mkdir MyMainProject
cd MyMainProject
forge init
```

2. Install the Library

Use Forge to install your published library from GitHub:
```shell
forge install zTgx/AssertionLogic
```
This command clones the specified GitHub repository into the lib directory of your project.

3. Update Your Configuration

Ensure your foundry.toml file includes the library path:
```toml
[profile.default]
src = 'src'
out = 'out'
libs = ['lib']
```

4. Use the Library in Your Contract

In your main project, you can now use the installed library. For example, MainContract.sol:
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "AssertionLogic/src/AssertionLogic.sol";

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