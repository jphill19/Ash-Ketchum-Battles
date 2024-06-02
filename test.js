// var jose = await chatModel.invoke("what is LangSmith?");
// console.log(jose)
// var input = "Raichu"
// // function pokemonLookupMiddleware (req, res, next) {
// //   const pokemon = req.params.pokemon;
// //   req.pokemon = pokemon;
// //   next()
// // }


// const pokemonQuestion = ChatPromptTemplate.fromMessages([
//     ["system", "You are a Pokemon Expert who is a fan of the series"],
//     ["user", `Has Ash Ketchum agaisn't ${pokemon} and with what pokemon?`],
//   ]);

// const chain = pokemonQuestion.pipe(chatModel)

// // const response = await chatModel.invoke(pokemonQuestion);
// const response = await chain.invoke();
// console.log(response.content)


const listOfJunk = ["system", "Jose"]

if (listOfJunk.map(item => item.toLocaleLowerCase()).includes("jose")) {
    console.log("yes")
} else {
    console.log("no")
}