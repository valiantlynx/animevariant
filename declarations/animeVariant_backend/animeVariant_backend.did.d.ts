import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'completePurchase' : ActorMethod<[Principal, Principal, Principal], string>,
  'getListedNFTPrice' : ActorMethod<[Principal], bigint>,
  'getListedNFTs' : ActorMethod<[], Array<Principal>>,
  'getOriginalOwner' : ActorMethod<[Principal], Principal>,
  'getOwnedNFTs' : ActorMethod<[Principal], Array<Principal>>,
  'getanimeVariantCanisterID' : ActorMethod<[], Principal>,
  'isListed' : ActorMethod<[Principal], boolean>,
  'listItem' : ActorMethod<[Principal, bigint], string>,
  'mint' : ActorMethod<[Array<number>, string], Principal>,
}
