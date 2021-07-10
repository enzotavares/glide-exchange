/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers'
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IMasterChefInterface extends ethers.utils.Interface {
  functions: {
    'deposit(uint256,uint256)': FunctionFragment
    'poolInfo(uint256)': FunctionFragment
    'totalAllocPoint()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string

  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result

  events: {}
}

export class IMasterChef extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IMasterChefInterface

  functions: {
    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'deposit(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    poolInfo(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber] & {
          lpToken: string
          allocPoint: BigNumber
          lastRewardBlock: BigNumber
          accSushiPerShare: BigNumber
        }
      ]
    >

    'poolInfo(uint256)'(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber] & {
          lpToken: string
          allocPoint: BigNumber
          lastRewardBlock: BigNumber
          accSushiPerShare: BigNumber
        }
      ]
    >

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'deposit(uint256,uint256)'(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  poolInfo(
    pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      lpToken: string
      allocPoint: BigNumber
      lastRewardBlock: BigNumber
      accSushiPerShare: BigNumber
    }
  >

  'poolInfo(uint256)'(
    pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      lpToken: string
      allocPoint: BigNumber
      lastRewardBlock: BigNumber
      accSushiPerShare: BigNumber
    }
  >

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

  'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'deposit(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    poolInfo(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    'poolInfo(uint256)'(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'deposit(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'poolInfo(uint256)'(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'deposit(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'poolInfo(uint256)'(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
