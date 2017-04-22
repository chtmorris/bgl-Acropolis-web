module.exports = {
    INTERFACE: 'interface',
    DATA: 'data',

    FROM_ACCOUNT: 'fromAccount',
    ACCOUNT_PASSWORD: 'accountPassword',

    // Settings
    FUELING_ACCOUNT: '0x871b327da2fdff737253c2bb8198c91dd59da74f',
    BORROWER: '0x7145b4a8875110737e5f94e0b1731047ad8a80d5',
    SELLER: '0x07c6573e09a3c1b17cd43e478630e3941c0e32f6',
    INVESTOR1: '0xd5b460d121f8582c7e687a33dcd2ceb7ec95b207',
    INVESTOR2: '0xe5614222ac478b7818a9d22c74dd34b0c7303c6d',
    INVESTOR3: '0xc6696aa0cd1064d5a6c5dfbf63079175182b4c3d',

    DEFAULT_PASSWORD: 'geth',
    DEFAULT_GAS: 1000000,

    // demo asset loan values
    ASSET_VALUE: 200000,
    FUNDING_TARGET: 100000,
    INTEREST_RATE: 2,
    MIN_INVESTMENT: 10000,
    PAYMENT_SIZE: 20000,

    ASSET_LOAN: 'AssetLoan',

    // Quick storage to hold onto contract data
    contracts: {
        AssetLoan: {
            data: '60606040526000600960146101000a81548160ff0219169083600281111561002357fe5b0217905550341561003057fe5b60405160e080611077833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b8660018190555081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560028190555085600581905550846006819055508360038190555033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260078190555080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050505050505b610eef806101886000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631bd26850146100675780633e3559e3146100715780635555a1b9146100bb57806388c9e5c2146100d9578063b5744b2a14610127575bfe5b61006f61014d565b005b341561007957fe5b6100a5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610308565b6040518082815260200191505060405180910390f35b6100c3610608565b6040518082815260200191505060405180910390f35b34156100e157fe5b61010d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061065f565b604051808215151515815260200191505060405180910390f35b341561012f57fe5b61013761088a565b6040518082815260200191505060405180910390f35b600080600281111561015b57fe5b600960149054906101000a900460ff16600281111561017657fe5b14151561018257610000565b60035434101561019157610000565b34600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600c80548060010182816101f29190610de9565b916000526020600020900160005b33909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550507f4e5f325db2c6f259961e7ef592c1bf72612be9d253e8673493f68569419447d7600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163334604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b5b50565b60006000600080600281111561031a57fe5b600960149054906101000a900460ff16600281111561033557fe5b14151561034157610000565b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150600082148061039757506002548260045401115b156103a157610000565b81600460008282540192505081905550600a80548060010182816103c59190610e15565b916000526020600020906003020160005b6060604051908101604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018681526020016002546064880281151561041457fe5b04815250909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201555050506000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f7bc0197253528ed3c4bedfcd7ae955698f51e28beb80b40845757de3414d3b27600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168584604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a160025460045414156105fa57610595610c8c565b507f17df5d82b6fec926b4d07c54fe0c1ce43a2c892c44267300a207597dd6dd0e0330604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b60045492505b5b5050919050565b6000600180600281111561061857fe5b600960149054906101000a900460ff16600281111561063357fe5b14151561063f57610000565b3073ffffffffffffffffffffffffffffffffffffffff163191505b5b5090565b60006000600080600281111561067157fe5b600960149054906101000a900460ff16600281111561068c57fe5b14151561069857610000565b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060008214156106e857610000565b6000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051809050600060405180830381858888f1935050505015610834577fcf320c0b66b81075fd4982cc3e80874e646571e2b8d093155cb547a7fd041bdf600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168584604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a160019250610882565b81600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009250610882565b5b5b5050919050565b600060006000600060018060028111156108a057fe5b600960149054906101000a900460ff1660028111156108bb57fe5b1415156108c757610000565b60055460075411156108dd576005546007819055505b6006546064016007540292508260643073ffffffffffffffffffffffffffffffffffffffff163102101561091057610000565b600091505b600a805490508260ff161015610b6c57612710600a8360ff1681548110151561093a57fe5b906000526020600020906003020160005b5060020154840281151561095b57fe5b049350600a8260ff1681548110151561097057fe5b906000526020600020906003020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc859081150290604051809050600060405180830381858888f19350505050506064600a8360ff168154811015156109f257fe5b906000526020600020906003020160005b506002015460075402811515610a1557fe5b04600a8360ff16815481101515610a2857fe5b906000526020600020906003020160005b50600101600082825403925050819055507ef1c30d81b0e7906dec78d2617535bcf7154fdec6d0b1ad0f864e340771d0ad30600a8460ff16815481101515610a7d57fe5b906000526020600020906003020160005b5060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a8560ff16815481101515610ac557fe5b906000526020600020906003020160005b506001015487604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390a15b8180600101925050610915565b6007546005600082825403925050819055507fcde0722c69cae5a0d9bccb0df8db2effc9ecd8760db138445908194d4704f4be30600754604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160006005541415610c7e576002600960146101000a81548160ff02191690836002811115610c1557fe5b02179055507fdfc91b3e0d4b9ee740a686cc2314d9e00415903259d30707bee85d1a91ac573630604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b60055494505b5b5050505090565b60006001600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051809050600060405180830381858888f193505050501515610cf757610000565b610cff610d28565b5b80600960146101000a81548160ff02191690836002811115610d1e57fe5b02179055505b5090565b60006000600090505b600c805490508160ff161015610de457600c8160ff16815481101515610d5357fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506000600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141515610dd657610dd48261065f565b505b5b8080600101915050610d31565b5b5050565b815481835581811511610e1057818360005260206000209182019101610e0f9190610e47565b5b505050565b815481835581811511610e4257600302816003028360005260206000209182019101610e419190610e6c565b5b505050565b610e6991905b80821115610e65576000816000905550600101610e4d565b5090565b90565b610ec091905b80821115610ebc5760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000905550600301610e72565b5090565b905600a165627a7a723058200790e622bd25e8d31be4dad6f00a9aa7be32ecc735b474ba1fb20f8708ce10420029',
            interface: [
                {
                    "constant": false,
                    "inputs": [],
                    "name": "investmentProposalAdd",
                    "outputs": [],
                    "payable": true,
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "investor",
                            "type": "address"
                        }
                    ],
                    "name": "investmentProposalApprove",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [],
                    "name": "fundsAdd",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": true,
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "investor",
                            "type": "address"
                        }
                    ],
                    "name": "investmentProposalDecline",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [],
                    "name": "paymentExecute",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "type": "function"
                }, {
                    "inputs": [
                        {
                            "name": "_assetValue",
                            "type": "uint256"
                        }, {
                            "name": "_fundingTarget",
                            "type": "uint256"
                        }, {
                            "name": "_interestRate",
                            "type": "uint256"
                        }, {
                            "name": "_minimumInvestmentAmount",
                            "type": "uint256"
                        }, {
                            "name": "_paymentSize",
                            "type": "uint256"
                        }, {
                            "name": "borrower",
                            "type": "address"
                        }, {
                            "name": "seller",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "type": "constructor"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "assetLoanAddress",
                            "type": "address"
                        }
                    ],
                    "name": "FundingTargetReachedEvent",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "borrower",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "investor",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "InvestmentProposalAddedEvent",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "borrower",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "investor",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "InvestmentProposalApprovedEvent",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "borrower",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "investor",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "InvestmentProposalDeclinedEvent",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "assetLoanAddress",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "investorWallet",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "outstaningInvestment",
                            "type": "uint256"
                        }, {
                            "indexed": false,
                            "name": "payment",
                            "type": "uint256"
                        }
                    ],
                    "name": "InvestorPaymentMadeEvent",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "assetLoanAddress",
                            "type": "address"
                        }
                    ],
                    "name": "LoanPaidOff",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "assetLoanAddress",
                            "type": "address"
                        }, {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "PaymentMadeEvent",
                    "type": "event"
                }
            ],
            address: '0x738ad85e6a7d3816307feacdce5eee2e9de7eadc'
        }
    }
}
