export interface ProductivityInterface {
  month?: number;
  value?: number;
}

export interface PropertieInterface {
  id?: number;
  name?: string;
  cropType?: string;
  productivity?: ProductivityInterface[];
  coordinates?: number[];
}
