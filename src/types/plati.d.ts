export interface PlatiSearchRequestQuery {
  query: string;
  pagesize: number;
  pagenum: number;
  response: string;
}

export interface PlatiSearchResponse {
  Pagenum: number;
  Pagesize: number;
  Totalpages: number;
  items: PlatiSearchItem[];
  total: number;
}

export interface PlatiSearchItem {
  id: number;
  name: string;
  price_rur: number;
  url: string;
  [key: string]: unknown;
}

export interface NormalizedPlatiItem {
  id: number;
  name: string;
  price: number;
  url: string;
}
