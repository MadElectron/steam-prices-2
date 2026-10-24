interface AppDataError {
  success: false;
  error: string;
}

interface AppDataSuccess<T> {
  success: true;
  data: T;
}

interface GamePriceData {
  name: string;
  steam: {
    defaultPrice: number;
    currentPrice: number;
  };
  mts: {
    price: number;
    finalPrice: number;
  };
  plati: {
    items: PlatiSearchItem[];
    link: string;
  };
}
