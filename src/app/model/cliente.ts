// src/app/cliente.model.ts
// src/app/model/cliente.ts
export interface User {
    id: number;
    username: string;
  }
  
  export interface Cliente {
    id?: number;
    rol: string;
    user: User;
    selectedProducto: string;
    selectedCantidad: number;
    precio: number;
    fecha: string;
  }
  