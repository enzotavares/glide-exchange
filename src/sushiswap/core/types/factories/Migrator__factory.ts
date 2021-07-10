/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { Migrator } from '../Migrator'

export class Migrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _chef: string,
    _oldFactory: string,
    _factory: string,
    _notBeforeBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<Migrator> {
    return super.deploy(_chef, _oldFactory, _factory, _notBeforeBlock, overrides || {}) as Promise<Migrator>
  }
  getDeployTransaction(
    _chef: string,
    _oldFactory: string,
    _factory: string,
    _notBeforeBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_chef, _oldFactory, _factory, _notBeforeBlock, overrides || {})
  }
  attach(address: string): Migrator {
    return super.attach(address) as Migrator
  }
  connect(signer: Signer): Migrator__factory {
    return super.connect(signer) as Migrator__factory
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Migrator {
    return new Contract(address, _abi, signerOrProvider) as Migrator
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_chef',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_oldFactory',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Factory',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_notBeforeBlock',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'chef',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'desiredLiquidity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'contract IUniswapV2Factory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IUniswapV2Pair',
        name: 'orig',
        type: 'address',
      },
    ],
    name: 'migrate',
    outputs: [
      {
        internalType: 'contract IUniswapV2Pair',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'notBeforeBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oldFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405260001960045534801561001657600080fd5b5060405161075f38038061075f8339818101604052608081101561003957600080fd5b50805160208201516040830151606090930151600080546001600160a01b03199081166001600160a01b039586161782556001805482169486169490941790935560028054909316939094169290921790556003556106c190819061009e90396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806305293137146100675780631bd6dfe1146100815780631fc8bc5d146100a557806340dc0e37146100ad578063c45a0155146100b5578063ce5494bb146100bd575b600080fd5b61006f6100e3565b60408051918252519081900360200190f35b6100896100e9565b604080516001600160a01b039092168252519081900360200190f35b6100896100f8565b61006f610107565b61008961010d565b610089600480360360208110156100d357600080fd5b50356001600160a01b031661011c565b60035481565b6001546001600160a01b031681565b6000546001600160a01b031681565b60045481565b6002546001600160a01b031681565b600080546001600160a01b03163314610173576040805162461bcd60e51b81526020600482015260146024820152733737ba10333937b69036b0b9ba32b91031b432b360611b604482015290519081900360640190fd5b6003544310156101c1576040805162461bcd60e51b8152602060048201526014602482015273746f6f206561726c7920746f206d69677261746560601b604482015290519081900360640190fd5b6001546040805163c45a015560e01b815290516001600160a01b039283169285169163c45a0155916004808301926020929190829003018186803b15801561020857600080fd5b505afa15801561021c573d6000803e3d6000fd5b505050506040513d602081101561023257600080fd5b50516001600160a01b031614610286576040805162461bcd60e51b81526020600482015260146024820152736e6f742066726f6d206f6c6420666163746f727960601b604482015290519081900360640190fd5b6000826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156102c157600080fd5b505afa1580156102d5573d6000803e3d6000fd5b505050506040513d60208110156102eb57600080fd5b50516040805163d21220a760e01b815290519192506000916001600160a01b0386169163d21220a7916004808301926020929190829003018186803b15801561033357600080fd5b505afa158015610347573d6000803e3d6000fd5b505050506040513d602081101561035d57600080fd5b50516002546040805163e6a4390560e01b81526001600160a01b03868116600483015280851660248301529151939450600093919092169163e6a43905916044808301926020929190829003018186803b1580156103ba57600080fd5b505afa1580156103ce573d6000803e3d6000fd5b505050506040513d60208110156103e457600080fd5b505190506001600160a01b03811661047c57600254604080516364e329cb60e11b81526001600160a01b03868116600483015285811660248301529151919092169163c9c653969160448083019260209291908290030181600087803b15801561044d57600080fd5b505af1158015610461573d6000803e3d6000fd5b505050506040513d602081101561047757600080fd5b505190505b6000856001600160a01b03166370a08231336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104cb57600080fd5b505afa1580156104df573d6000803e3d6000fd5b505050506040513d60208110156104f557600080fd5b505190508061050957509250610686915050565b6004818155604080516323b872dd60e01b815233928101929092526001600160a01b0388166024830181905260448301849052905190916323b872dd9160648083019260209291908290030181600087803b15801561056757600080fd5b505af115801561057b573d6000803e3d6000fd5b505050506040513d602081101561059157600080fd5b50506040805163226bf2d160e21b81526001600160a01b0384811660048301528251908916926389afcb4492602480820193918290030181600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b505050506040513d604081101561060457600080fd5b5050604080516335313c2160e11b815233600482015290516001600160a01b03841691636a6278429160248083019260209291908290030181600087803b15801561064e57600080fd5b505af1158015610662573d6000803e3d6000fd5b505050506040513d602081101561067857600080fd5b505060001960045550925050505b91905056fea26469706673582212201c4c082ce8feeedbd914711a3087ef9a6bc519e01811c6468d13c841f8e0419a64736f6c634300060c0033'
