export class PaymentType {
    id:string='';
    title:string='';
    cost:number=0.0;
    description:string='';
    highlighted:boolean=false;
}

export var payments:PaymentType[] = [
    {id:"9ef5a5ea28c70f5fcc7c0cf4ab8a724a",title:"Complete Bundle",cost:279,description:"Includes all components from the Application UI, Marketing, and Ecommerce kits.", highlighted:true},
    {id:"93718e0b9c0940186c97a37080ca1015",title:"Application UI",cost:149,description:"Buttons, forms, tables, list views — everything you need to build beautiful web application UIs.", highlighted:false},
    {id:"7cb15e416d62919b1b40298324fbe30b",title:"Marketing",cost:149,description:"Heroes, feature sections, testimonials, pricing sections — everything you need to build your next landing page.", highlighted:false},
    {id:"53ef2022ee91ccf50dd8b63da5a563b9",title:"Ecommerce",cost:149,description:"Checkout forms, shopping carts, product views, order details — everything you need to build your next ecommerce front-end.", highlighted:false},
]