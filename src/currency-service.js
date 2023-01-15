export default class CurrencyService {
  static async getExchange(amount, targetCode) {
    if (isNaN(amount)) {
      throw new Error("Amount entered needs to be a number!");
    }
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${amount}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse.conversion_result;
    } catch(error) {
      return error;
    }
  }

  static async fetchSupportedCurrencies() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`);
    const jsonifiedResponse = await response.json();
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
      throw new Error(errorMessage);
    }
    return jsonifiedResponse;
  } catch(error) {
    return error;
  }
}