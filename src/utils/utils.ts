// TODO: Comentar muy bien, y nutrirlo de funciones reusables.

namespace app.miscelanious {
    
    export class Utils {
    
        // generates a new Universally unique identify (UUID) 
        // the UUID is used to identify each of the tasks
        public static uuid(): string {
          /*jshint bitwise:false */
          var i, random;
          var uuid = '';
    
          for (i = 0; i < 32; i++) {
            // tslint:disable-next-line:no-bitwise
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
              uuid += '-';
            }
            // tslint:disable-next-line:no-bitwise
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
              .toString(16);
          }
    
          return uuid;
        }

    
        // adds 's' to the end of a given world when count > 1
        public static pluralize(count: number, word: string): string {
          return count === 1 ? word : word + 's';
        }

    
        // stores data using the localStorage API
        public static storeLocally(namespace: string, data?: any): any {
          if (data) {
            return localStorage.setItem(namespace, JSON.stringify(data));
          }
    
          var store = localStorage.getItem(namespace);
          return (store && JSON.parse(store)) || [];
        }
    
    }
}