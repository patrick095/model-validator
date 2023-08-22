import { ValidateDTOS, String, ValidateDTO } from "./decorators/class.decorator";

// @NewModel
// export class ClassTest {
//     @String
//     public msg: any;

//     constructor(args: any) {
//         this.msg = args.msg;
//     }

//     private handleError(errorMsg: string) {
//         /**
//          * handle the error as per your need here
//          */
//         throw new Error(errorMsg);
//     }
// }
interface TestInterface {
    msg: string;
}

const testOK = new ValidateDTO({ msg: "ok" });
console.log('testOK: ', testOK)

const testNonOk =  new ValidateDTO({ msg: 0 } as any);
console.log('testNonOk', testNonOk)

// new ClassTest({ msg: 0 })