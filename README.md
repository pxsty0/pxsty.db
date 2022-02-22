# Pxsty.DB
<div align="center">

  <img src="https://img.shields.io/npm/dw/pxsty.db?style=for-the-badge&color=7289da&label=pxsty.db&logo=npm&logoColor=white">
  </div>
  <br>

```shell
npm i pxsty.db
```

```javascript
const dbcore  = require('pxsty.db')
const db = new dbcore(); 

db.set("Veri", 0); // Yazılan Veri'yi 2.Değer Olarak Tanımlar
db.add("Veri",10); // Yazılan Veri'ye 2.Değer Kadar Ekleme Yapar
db.get("Veri"); // Yazılan Veri'yi Return Eder
db.delete("Veri"); // Yazılan Veri'yi Veri Tabanından Siler
db.push("Veri","2.Değer") // Yazılan Veri'ye 2.Değeri'e Pushlar
db.has("Veri") // Yazılan Veri Veri Tabanında Varsa True Yoksa false'u Return Eder
db.allDelete(); // Veri Tabanını Komple Temizler
```


Code is Protected by MIT License, Legal Process is Started in case of Unauthorized Sharing <br>
Kod MIT Lisansı İle Korunmaktadır İzinsiz Paylaşılması Durumunda Yasal Süreç Başlatılır
