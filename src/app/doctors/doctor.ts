export class Doctor{

        private key:string;
        private name:string;
        private age :number;
        private spec:string;

        constructor(key:string,name:string,age:number,spec:string){
            this.key = key;
            this.name = name;
            this.age = age;
            this.spec = spec;

        }

        getKey(){
            return this.key;
        }

        getName(){
            return this.name;
        }

        getAge(){
            return this.age;
        }

        getSpec(){
            return this.spec;
        }

        
}