export interface ProductivityInterface {
  month?: number;
  value?: number;
}

export interface PropertyInterface {
  id?: number;
  name?: string;
  cropType?: string;
  productivity?: ProductivityInterface[];
  coordinates?: number[];
}
