var notificacoes = [
	{id: '1', message: 'Notificaçao 1'}];

var notificacoesDb = [{
	pushId: '2', message: 'Test 2'},
	{pushId: '1', message: 'Notificaçao 1'}]

var result = diff(notificacoes.map(function(n){return n.id}), notificacoesDb.map(function(n){return n.pushId}));

console.log(result);
document.write(result);

function diff(array1, array2){
	return $(array1).not(array2).get().concat($(array2).not(array1).get());
}


