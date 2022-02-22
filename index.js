const fs = require("fs");

// Kod MIT Lisansı İle Korunmaktadır İzinsiz Paylaşılması Durumunda Yasal Süreç Başlatılır
// Code is Protected by MIT License, Legal Process is Started in case of Unauthorized Sharing
module.exports = class pxstydb {

   
    constructor(){

        this.filepath = "./database.json";

    
        this.data = {};

        if(!fs.existsSync(this.filepath)){
            fs.writeFileSync(this.filepath, "{}", "utf-8");
        } else {
            this.jsonget();
        }
    }

   
    jsonget(){
        const newdata = JSON.parse(fs.readFileSync(this.filepath));
        if(typeof newdata === "object"){
            this.data = newdata;
        }
    }

   
    jsonset(){
        fs.writeFileSync(this.filepath, JSON.stringify(this.data, null, 2), "utf-8");
    }

   
	get(key){ 
        return this.data[key];
    }



    set(key, value){ 
        this.data[key] = value;
        this.jsonset();
    }

   

    delete(key){ 
        delete this.data[key];
        this.jsonset();
    }

add(key, count){ 
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.jsonset();
    }
    
    allDelete(){ 
        this.data = {};
        this.jsonset();
    }
    has(key){
        return Boolean(this.data[key]);
    }
    push(key, element){
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.jsonset();
    }
};
