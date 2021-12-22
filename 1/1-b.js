// class Common{
//     constructor(className, classUnit, classCapacity){
//         this.className = className
//         this.classUnit = classUnit
//         this.classCapacity = classCapacity
//     }
// }
// class Soft extends Common{
//     constructor(className , classUnit, classCapacity, book){
//         super(className,classUnit, classCapacity)
//         this.book = book
//     }
//     getFullcourse(){
//         console.log(`className:${this.className} classUnit:${this.classUnit} classCapacity:${this.classCapacity} book:${this.book}`)
//     }
// }
// class Network extends Common{
//     constructor(className , classUnit, classCapacity, project){
//         super(className,classUnit, classCapacity)
//         this.project = project
//     }
//     getFullcourse(){
//         console.log(`className:${this.className} classUnit:${this.classUnit} classCapacity:${this.classCapacity} project:${this.project}`)
//     }
// }
// const software = new Soft("softEngineering", 3 , 50 , "Database")
// console.log(software)
// software.getFullcourse()
// const net = new Network("network" , 3,20, true)
// console.log(net)
// net.getFullcourse()

function Subject(className , classUnit, classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
}    
const software = new Subject("softEngineering",3,50)
software.book = "database"
console.log(software)
const net = new Subject("network", 3 ,30)
net.project = true
console.log(net)
