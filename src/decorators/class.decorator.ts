type Construtor = new (...args: any[]) => {};

export function ValidateDTOS<T extends Construtor>(constr: T) {
	function _DecoratorName<T extends {new(...args: any[]): {}}>(constr: T){
		return class extends constr {
			constructor(...args: any[]) {
				super(...args)
				console.log(args)
		  }
		}
	}
	return _DecoratorName(constr);
}

@ValidateDTOS
export class ValidateDTO<T extends Record<string, any>> {
	constructor(args: T) {
		const keys = Object.keys(args);
		keys.forEach((key) => {
			Object.defineProperty(this, key, {
				get() { return this[key]; },
				set(newVal) { this[key] = newVal; }
			});
		});
		console.log(this);
	}
}

export function String(target: any, key: string) {
    const newKey = `_${key}`;

    Object.defineProperty(target, key, {
      get() {
        return this[newKey];
      },
      set(newVal) {
        if (typeof newVal !== 'string') {
            const msg = `${key} need to be String`;
            if (this['handleError']) {
               return this['handleError'](msg)
            }
            throw new Error(msg)
        }
        this[newKey] = newVal;
      }
    });
}
