const StringFormatter = function(){

    const capitalizeFirst = function(string){
        return string[0].toUpperCase()+ string.slice(1).toLowerCase()
    }

    const skewerCase = function(string){
        let newString = string
        for (let index = 0; index < string.length; index++) {
            if (string[index]==" ") {
                newString=newString.replace(" ","_")            
            } 
        }
        return newString
    }
    

    const functions = {capitalizeFirst, capitalizeFirst, skewerCase: skewerCase}
    return functions

}

const executor = StringFormatter()


const Bank= function(){
    let money= 500
    const depositCash = function (cash){
        money+=cash
    }

    const checkBalance = function (){
        console.log(money)
    }

    const functions = {deposit: depositCash ,  showBalance: checkBalance}
    return functions
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


const SongsManager = function(){
    let songs  = {}
    const youLink = "https://www.youtube.com/watch?v="
    const addSong = function(name, link){
        //let youCode= link-youLink
        songs[name] = link.substring(youLink.length)
        
    }
    const getSong = function(name){
        console.log(youLink+songs[name])
    }

    const functions={addSong, getSong}
    return functions
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("how long") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
