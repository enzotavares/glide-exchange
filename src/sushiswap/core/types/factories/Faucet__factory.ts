/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { Faucet } from '../Faucet'

export class Faucet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _poly: boolean,
    _bokky: string[],
    _compound: string[],
    _fauceteer: string,
    _sushi: string,
    overrides?: Overrides
  ): Promise<Faucet> {
    return super.deploy(_poly, _bokky, _compound, _fauceteer, _sushi, overrides || {}) as Promise<Faucet>
  }
  getDeployTransaction(
    _poly: boolean,
    _bokky: string[],
    _compound: string[],
    _fauceteer: string,
    _sushi: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_poly, _bokky, _compound, _fauceteer, _sushi, overrides || {})
  }
  attach(address: string): Faucet {
    return super.attach(address) as Faucet
  }
  connect(signer: Signer): Faucet__factory {
    return super.connect(signer) as Faucet__factory
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet {
    return new Contract(address, _abi, signerOrProvider) as Faucet
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_poly',
        type: 'bool',
      },
      {
        internalType: 'address[]',
        name: '_bokky',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_compound',
        type: 'address[]',
      },
      {
        internalType: 'contract IFauceteer',
        name: '_fauceteer',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: '_sushi',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'drip',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040526000805460ff1916905534801561001a57600080fd5b506040516107b23803806107b2833981810160405260a081101561003d57600080fd5b81516020830180516040519294929383019291908464010000000082111561006457600080fd5b90830190602082018581111561007957600080fd5b825186602082028301116401000000008211171561009657600080fd5b82525081516020918201928201910280838360005b838110156100c35781810151838201526020016100ab565b50505050905001604052602001805160405193929190846401000000008211156100ec57600080fd5b90830190602082018581111561010157600080fd5b825186602082028301116401000000008211171561011e57600080fd5b82525081516020918201928201910280838360005b8381101561014b578181015183820152602001610133565b5050505091909101604090815260208381015193909101516000805460ff19168a1515179055875193955093506101899260019250908701906101d3565b50825161019d9060029060208601906101d3565b50600380546001600160a01b039384166001600160a01b0319918216179091556004805492909316911617905550610257915050565b828054828255906000526020600020908101928215610228579160200282015b8281111561022857825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906101f3565b50610234929150610238565b5090565b5b808211156102345780546001600160a01b0319168155600101610239565b61054c806102666000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639f678cca14610030575b600080fd5b61003861003a565b005b60005460ff16156100ec57604080516369e4e61360e11b815269010f0cf064dd59200000600482015290517396a62428509002a7ae5f6ad29e4750d852a3f3d79163d3c9cc269160248083019260209291908290030181600087803b1580156100a257600080fd5b505af11580156100b6573d6000803e3d6000fd5b505050506040513d60208110156100cc57600080fd5b506100ec90507396a62428509002a7ae5f6ad29e4750d852a3f3d7610320565b60005b60015481101561017d5760006001828154811061010857fe5b600091825260208220015460408051634fb3c66560e11b815290516001600160a01b0390921693508392639f678cca9260048084019382900301818387803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b5050505061017481610320565b506001016100ef565b5060005b60025481101561021d5760006002828154811061019a57fe5b6000918252602082200154600354604080516333d2e68360e11b81526001600160a01b0393841660048201819052915191955091909216926367a5cd069260248084019382900301818387803b1580156101f357600080fd5b505af1158015610207573d6000803e3d6000fd5b5050505061021481610320565b50600101610181565b5060048054604080516370a0823160e01b81523093810193909352516001600160a01b039091169163a9059cbb9133916127109185916370a08231916024808301926020929190829003018186803b15801561027857600080fd5b505afa15801561028c573d6000803e3d6000fd5b505050506040513d60208110156102a257600080fd5b5051816102ab57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156102f257600080fd5b505af1158015610306573d6000803e3d6000fd5b505050506040513d602081101561031c57600080fd5b5050565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561036f57600080fd5b505afa158015610383573d6000803e3d6000fd5b505050506040513d602081101561039957600080fd5b5051905061031c6001600160a01b0383163383604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106104295780518252601f19909201916020918201910161040a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461048b576040519150601f19603f3d011682016040523d82523d6000602084013e610490565b606091505b50915091508180156104be5750805115806104be57508080602001905160208110156104bb57600080fd5b50515b61050f576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fd5b505050505056fea2646970667358221220810ba2ed93200bc9f2474977b50dc63dae378db7b23bb41ac010961407289f1564736f6c634300060c0033'
