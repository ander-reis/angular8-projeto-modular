export class ConversaoResponse {
  constructor(
    public base: string,
    public date: string,
    public rates: any
  ) {
  }
}

// exemplo
// {"base": "USD", "date": "2020-05-26", "rates": {"BRL": 3.1405}}
