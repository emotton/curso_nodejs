function toUpperCase(target: Object, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function () {
      const str: string = originalMethod.apply(this)
      return str.toUpperCase()
    }
}
  
class Email{
  private message: string;
  
  constructor(message: string){
    this.message = message;
  }

  @toUpperCase
  getMessage() {
    return this.message
  }
}

let email = new Email('exemplo de utilização');
console.log(email.getMessage());