var ConnectionFactory = (function () {

    const stores = ['negociacoes'];
    const version = 4;
    const dbName = 'aluraframe';

    var connection = null;
    var close = null;

    class ConnectionFactory {
        constructor() {
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open('aluraframe', 4);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };
                openRequest.onsuccess = e => {
                    if (!connection) {
                        connection = e.target.result;
                        close = connection.close.bind(connection); //connection vira o this do método close
                        connection.close = function(){
                            throw new Error('Você não pode fechar diretamente uma conexão');
                        }
                    }
                    resolve(connection);
                };
                openRequest.onerror = e => {
                    console.log(e.target.error);

                    reject(e.target.error.name);
                }
            });
        }

        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

                connection.createObjectStore(store, { autoIncrement: true });
            });
        }

        static closeConnection(){
            if(connection){
                Reflect.apply(close, connection,[]); //faz o mesmo que o bind
                close();
                connection = null;
            }
        }
    }
})();
