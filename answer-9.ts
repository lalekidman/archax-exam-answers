
    // In typescript, on some instance, enum and object has different features. depends on the requirements. for example, enum can be use as absolute type of argument.
    // for example, you have enum ACTION {BUY = "buy", SELL = "sell"}, and you use it as type of arg1 on the methodOne. by this. you must use the enum ACTION to satisfied the typescript because you can't just pass literal string like "BUY", "buy", it will throw an error.
  
    enum ACTION {
      BUY = "buy",
      SELL = "sell"
    }

    function menthodOne (actionType: ACTION) {
      return actionType
    }

    menthodOne(ACTION.BUY) // good
    menthodOne("BUY") // BAD
    menthodOne("buy") // BAD
