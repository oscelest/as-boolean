export function asBoolean<T>(value: T): boolean {
  if (value === null) {
    return false;
  }
  
  switch (typeof value) {
    case "boolean":
      return value;
    case "string":
      return stringAsBoolean(value);
    case "function":
      return true;
    case "undefined":
      return false;
    case "number":
      return numberAsBoolean(value);
    case "bigint":
      return bigintAsBoolean(value);
    case "symbol":
      return asBoolean(value.toString().slice(7, -1));
    case "object":
      return objectAsBoolean(value);
    default:
      throw new Error(`Given value of type '${typeof value}' cannot be cast to a boolean.`);
  }
}

function numberAsBoolean(value: number): boolean {
  if (isNaN(value)) {
    return false;
  }
  
  switch (value) {
    case 1:
      return true;
    case 0:
    case -1:
      return false;
    default:
      throw new Error(`Given value of type 'number' does not contain a truthy value: '${value}'`);
  }
}

function bigintAsBoolean(value: bigint): boolean {
  if (value === BigInt("1")) {
    return true;
  }
  
  if (value === BigInt("0") || value === BigInt("-1")) {
    return false;
  }
  
  throw new Error(`Given value of type 'number' does not contain a truthy value: '${value}'`);
}

function objectAsBoolean(value: object): boolean {
  if (Array.isArray(value) || value instanceof Buffer) {
    return !!value.length;
  }
  
  const boolean_object = value as BooleanObject;
  if (boolean_object.toBoolean && typeof boolean_object.toBoolean === "function") {
    return boolean_object.toBoolean.call(value);
  }
  
  if (value instanceof Date) {
    return value.getTime() > 0;
  }
  
  return !!Object.keys(value).length;
}

function stringAsBoolean(value: string): boolean {
  switch (value.toLowerCase()) {
    case "y":
    case "yes":
    case "true":
    case "1":
    case "+":
      return true;
    case "":
    case "n":
    case "no":
    case "false":
    case "0":
    case "-":
      return false;
    default:
      throw new Error(`Given value of type 'string' does not contain a truthy value: '${value}'`);
  }
}

interface BooleanObject {
  toBoolean?(...args: any[]): boolean;
}
