class Media{
    constructor(name, yearOfrelease,prize){
      this.name = name
      this.yearOfrelease = yearOfrelease
      this.prize = prize
    }
}
class Film extends Media{
    constructor(name , yearOfrelease, prize, director , IMDB){
        super(name , yearOfrelease, prize)
        this.director = director
        this.IMDB = IMDB
    }
    getInfo(){
        console.log(`name: ${this.name}, yearOfrelease:${this.yearOfrelease}, prize:${this.prize}, director:${this.director}, IMDB:${this.IMDB}`)
    }
}
class Book extends Media{
    constructor(name , yearOfrelease, prize, author, translator){
        super(name , yearOfrelease, prize)
        this.author = author
        this.translator = translator
    }
    getInfo(){
        console.log(`name: ${this.name} , yearOfrelease:${this.yearOfrelease} , prize:${this.prize} auther:${this.author}, translator:${this.translator}`)
    }
}
class Song extends Media{
    constructor(name , yearOfrelease, prize, vocalist , album){
        super(name , yearOfrelease, prize)
        this.vocalist = vocalist
        this.album = album
    }
    getInfo(){
        console.log(`name: ${this.name}, yearOfrelease:${this.yearOfrelease}, prize:${this.prize}, vocalist:${this.vocalist}, Album:${this.album}`)
    }
}
const movie = new Film("The Shawshank Redemption", 1994, "BAFTA","Frank Drabont", 9.3)
movie.getInfo()
const book = new Book("A man called ove", 2012, "best seller", "Fredric Backman","Elnaz Farahnakyan")
book.getInfo()
const song = new Song("my way", 1970,"golden globe", "Frank Sinatra", "my way" )
song.getInfo()