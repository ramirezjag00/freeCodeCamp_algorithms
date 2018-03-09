function checkCashRegister(price, cash, cid) {
  var change = cash - price,
      denom = [
        ["ONE HUNDRED", 100.00],
        ["TWENTY", 20.00],
        ["TEN", 10.00],
        ["FIVE", 5.00],
        ["ONE", 1.00],
        ["QUARTER", 0.25],
        ["DIME", 0.10],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
      ],
      register = cid.reduce(function(acc, curr) {
        acc.TOTAL += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      }, {"TOTAL": 0});

  if (register.TOTAL < change) {
    return "Insufficient Funds";
  } else if (register.TOTAL === change) {
    return "Closed";
  }

  var changeDue = [];
  for (var i = 0; i < denom.length; i++) {
    var currLeft = register[denom[i][0]],
        val = 0;
    while (change >= denom[i][1] && currLeft > 0) {
      change -= denom[i][1];
      currLeft -= denom[i][1];
      val += denom[i][1];
      change = Math.round(change * 100) / 100;
    }


    if (val > 0) {
      changeDue.push([denom[i][0], val]);
    }
  }

  if (change > 0) {
    return "Insufficient Funds";
  }

  return changeDue;

}

checkCashRegister(1, 2.05, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0.30], ["QUARTER", 0.75], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 