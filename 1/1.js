function Subject(className , classUnit, classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.getFullcourse = function(){
     console.log(`className:${ this.className},classUnit:${this.classUnit},classCapacity:${this.classCapacity}`)
    }
}    
const soft = new Subject("softEngineering",3,50)
soft.getFullcourse()
const network = new Subject("network", 3 ,30)
network.getFullcourse()