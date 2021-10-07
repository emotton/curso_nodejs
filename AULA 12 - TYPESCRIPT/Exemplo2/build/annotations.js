"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function toUpperCase(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const str = originalMethod.apply(this);
        return str.toUpperCase();
    };
}
class Email {
    constructor(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}
__decorate([
    toUpperCase
], Email.prototype, "getMessage", null);
let email = new Email('exemplo de utilização');
console.log(email.getMessage());
