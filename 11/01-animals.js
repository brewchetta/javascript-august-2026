// ANIMALS ARRAY EXERCISES //

const animals = [
    "ant","ape","bat","bee","cat","cod","dog","eel","elk","emu","fly","fox","gnu","jay","owl","pig","ram","rat","yak","bear","boar","clam","crab","crow","deer","dove","duck","fish","frog","gaur","gnat","goat","gull","hare","hawk","ibex","ibis","kudu","lark","lion","mink","mole","mule","newt","oryx","pony","rail","rook","seal","swan","toad","wasp","wolf","worm","wren","bison","camel","cobra","crane","eagle","eland","finch","goose","heron","horse","human","hyena","koala","lemur","llama","loris","louse","moose","mouse","okapi","otter","quail","raven","shark","sheep","shrew","skunk","snail","snake","squid","stork","tapir","tiger","trout","viper","whale","zebra","alpaca","donkey","baboon","badger","beaver","cattle","chough","coyote","curlew","dugong","dunlin","falcon","ferret","gerbil","grouse","hornet","jackal","jaguar","locust","magpie","mantis","marten","monkey","oyster","parrot","pigeon","quelea","rabbit","salmon","spider","turkey","turtle","walrus","weasel","wombat","buffalo","caribou","chamois","cheetah","chicken","dogfish","dolphin","echidna","gazelle","giraffe","gorilla","goshawk","guanaco","hamster","herring","kouprey","lapwing","leopard","lobster","mallard","manatee","meerkat","narwhal","octopus","opossum","ostrich","panther","peafowl","pelican","penguin","quetzal","raccoon","sardine","sparrow","swallow","tarsier","termite","vulture","wallaby","wildcat","aardvark","anteater","antelope","capybara","dinosaur","dotterel","elephant","flamingo","goldfish","hedgehog","kangaroo","lyrebird","mandrill","mongoose","mosquito","pheasant","porpoise","red deer","reindeer","scorpion","seahorse","squirrel","starling","stingray","stinkbug","woodcock","albatross","alligator","armadillo","barracuda","butterfly","cassowary","cockroach","cormorant","crocodile","dragonfly","goldfinch","jellyfish","kookabura","partridge","porcupine","red panda","sandpiper","spoonbill","wolverine","chimpanzee","chinchilla","kingfisher","rhinoceros","salamander","woodpecker","caterpillar","grasshopper","hummingbird","nightingale","sand dollar","hippopotamus", "xenopus"
]

// Use .forEach() to console.log each name
animals.forEach(animalName => console.log(animalName))


// Use .map() to return a new array of each name capitalized
animals.map(animalName => animalName[0].toUpperCase() + animalName.slice(1))
// uppercase first letter + rest of the string


// Use .sort() to alphabetically sort each name
animals.sort((a,b) => a > b)


// Use .find() to find the first animal with a name of 3 characters
animals.find(animalName => animalName.length === 3)


// Use .filter() to create a new array of animals with a name less than 6 characters
animals.filter(animalName => animalName.length < 6)


// Use .filter() to create a new array of animals with a name more than 5 characters
animals.filter(animalName => animalName.length > 5)


// Use .filter() to create a new array of animals that start with the letter "A"
animals.filter(animalName => animalName[0] === "a")