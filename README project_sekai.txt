* Mempersiapkan Data Base dan ERD nya
* Mempersiapkan BackEnd Berupa NestJS dengan query di terminal :
	- npm i -g @nestjs/cli
	- nest new backend
* Mempersiapkan main.ts
* Menggenerate src Module,Controller,Service DLL di terminal :
	- nest g res bookmart
* Hubungkan BackEnd dengan DataBase :
	- Install sequelize-typescript
	- Install sequelize-typescript-generator
	- Jalankan PgScriptnya "stg -D postgres -d minpro_lab -u postgres -x root -h localhost -p 5432 -o models/bootcamp -s bootcamp -i"
* Mempersiapkan Models dan Sequelize Query :
	- Sequelize Query disiapkan dengan impor dan memasukkannya ke constructor di dalam service


