var inscricaoEstadual = require("../ie");

module.exports = {
	"Passando inscrição que serve para mais de um estado": function(test){
		test.deepEqual(["pi", "es", "mt", "to"], inscricaoEstadual("012345679"));
		test.done();
	},
	"É possível utilizar resultado como boleano": function(test){
		test.ok(inscricaoEstadual("012345679"));
		test.done();
	},
	"Retorna falso se não é inscrição estadual de ninguém": function(test){
		test.strictEqual(inscricaoEstadual("01010101"), false);
		test.done();
	},
	"Passando string vazia no estado também funciona": function(test){
		test.doesNotThrow(function(){ inscricaoEstadual("012345679", ""); });
		test.done();
	},
	"Não passando inscrição estadual lança erro": function(test){
		test.throws(function(){ inscricaoEstadual(); });
		test.done();
	},
	"Passando inscrição estadual indefinida lança erro": function(test){
		test.throws(function(){ inscricaoEstadual(undefined); });
		test.done();
	},
	"Não passando inscrição estadual mas passando estado lança erro": function(test){
		test.throws(function(){ inscricaoEstadual(undefined, "df"); });
		test.done();
	},
	"Passando inscrição estadual que não seja string lança erro": function(test){
		test.throws(function(){ inscricaoEstadual(123456, "df"); });
		test.done();
	},
};