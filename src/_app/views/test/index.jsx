import React from 'react';
import settings from './settings';

var Web3 = require('web3');

// Connect to local geth node
var web3 = new Web3(
	new Web3.providers.HttpProvider("http://172.18.4.45:8545")
);


export default class test extends React.Component{
	render(){
		contractDeployAssetLoan(settings.ASSET_LOAN, 'assetLoan', null, null, function(e, r){});

		return(<div>hello</div>);
	}
}

function contractDeployAssetLoan(fileName, id, fromAccount, accountPass, callback) {
	/**
	* Deploy a specific contract, source loaded and compiled 
	* based on id, note utilized to deploy registry initially in most cases
	* @param {string} fileName: file of the contract you are deploying
	* @param {string} id: unique id to use for this contract
	* @param {eth address} fromAccount: externally owned account to send transaction
	* @param {string} accountPass: password to unlock account
	* @callback {function}
	*/
	console.log('Deploying contract: ' + id);

    var owner, source, compiled, contractObject, gasEstimate;

    // Init the account to send the transaction, unlock, fund, etc.
    owner = accountSetupForTransaction(fromAccount, accountPass);
    compiled = settings.contracts[fileName]; 

    // source = contractGetSource(fileName);  // load source from contract file
    // // compile source into EVM bytecode and interface
    // compiled = contractCompileSource(source); 

	// Object to create instance of
	contractObject = web3.eth.contract(compiled['interface']); 
    gasEstimate  = web3.eth.estimateGas({data: compiled['data']});

    // instantiate and deploy contract
	contractObject.new(
		settings.ASSET_VALUE,
		settings.FUNDING_TARGET,
		settings.INTEREST_RATE,
		settings.MIN_INVESTMENT,
		settings.PAYMENT_SIZE, // uint _paymentSize,
		settings.BORROWER, // address borrower,
		settings.SELLER, //address seller, 
		{
			from: owner,
			data: compiled['data'],
			gas: gasEstimate*2
		}, function (e, contract){
			callbackContractDeployment(e, contract, id);
		}
	)

    callback(null, gasEstimate);
}


/**********
* Helpers *
**********/
// Not likey to be accessed externally
function callbackContractDeployment(e, contract, id){
	/**
	* Helper utilized when deploying a contract.  Deploy contract and update 
	* local object
	* @param {string} e: error message
	* @param {contract} contract: contract instance in the process of being deployed
	* @param {string} id: unique id to save this contract as in local object
	*/
	if(!e) {
		if(!contract.address) {
		  console.log("Contract transaction sent: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
		} else {
			console.log("Contract mined! Address: " + contract.address);
		}
	}
	else {
		console.log("err: " + e)
	}
}

function accountSetupForTransaction(account, password){
		/** Setup the given account in order to send transaction
		Unlock, fund, etc. to be expanded
		* @param {string} fileName: name of the contract file to load
		* @return {address}: eth account address once unlocked
		*/

		// If no account passed in then default to fueling
		if(!(account)){
			account = settings.FUELING_ACCOUNT;
			password = settings.DEFAULT_PASSWORD;
		}

		web3.personal.unlockAccount(account, password);
		return account;
}



