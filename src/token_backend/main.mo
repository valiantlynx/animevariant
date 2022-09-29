import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token {

  Debug.print("system start");

  let owner : Principal = Principal.fromText("7ifjt-pl5fu-m3gxd-v4moj-ac6g2-mydtb-hbypc-m2dam-jm5lt-orrmh-hqe");
  let totalSupply : Nat = 1000000000;
  let symbol : Text = "VAL";

  private stable var balanceEntries : [(Principal, Nat)] = [];
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash); //private means that we will only be able to modify the hashmap from within the token actor.
  if (balances.size() < 1){
    balances.put(owner, totalSupply);
  };

// check balance
  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

// fauce - give away
  public shared(msg) func payOut() : async Text { // u can get the caller by using shared

    Debug.print(debug_show(msg.caller));

    if (balances.get(msg.caller) == null){
      let amount = 1000;
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "Already Claimed" 
    }
    
  };

// tranfer val tokens
  public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amount) {
      let newFromBalance: Nat = fromBalance - amount;
      balances.put(msg.caller, newFromBalance);

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amount;
      balances.put(to, newToBalance);

      return "success";
    }else{
      return "Insufficient Funds"
    }

    
  };

//before upgrade save the hashmap(ledger) as an array
  system func preupgrade(){
    balanceEntries := Iter.toArray(balances.entries());
  };

//after upgrade replace the saved array to the running hashmap
  system func postupgrade(){
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
    if (balances.size() < 1){
      balances.put(owner, totalSupply);
    };
  };
    
};
