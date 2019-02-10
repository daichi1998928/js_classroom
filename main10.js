const tweets = [
    { username: "daichi", 
      text: "aaaaa",
      replies:
        [{ username: "ruka", text: "ttttttt"},{ username: "kiho", text: "aaaaaaaa"} ] 
     },
    { username: "ruka",
      text: "maron食べたい",
      replies:[
          {username: "daichi", text: "ttttttt"},{username: "kiho", text: "eeeeeee"}
      ]
    },
]

tweets.forEach( function(value){
    console.log(value);
    value.replies.forEach(function(replie){
        console.log(replie);
    })
})